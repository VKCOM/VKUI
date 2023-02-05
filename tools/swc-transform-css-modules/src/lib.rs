use swc_core::ecma::{
    ast::*,
    atoms::JsWord,
    visit::{as_folder, FoldWith, VisitMut, VisitMutWith},
};
use swc_core::plugin::{plugin_transform, proxies::TransformPluginProgramMetadata};

const CSS_MODULES_SUFFIX: &str = ".module.css";

/// Функция обработки селекторов.
fn generate_scoped_name(name: String) -> String {
    if name.starts_with("vkui") || name == "mount" {
        return name;
    }

    format!("vkui{name}")
}

pub struct TransformVisitor {
    /// Вектор с названиями переменных используемых в css modules.
    specifiers: Vec<JsWord>,
}

impl TransformVisitor {
    #[inline]
    pub const fn new() -> Self {
        TransformVisitor {
            specifiers: Vec::new(),
        }
    }
}

// Implement necessary visit_mut_* methods for actual custom transform.
// A comprehensive list of possible visitor methods can be found here:
// https://rustdoc.swc.rs/swc_ecma_visit/trait.VisitMut.html
impl VisitMut for TransformVisitor {
    // Обрабатываем переменные
    fn visit_mut_expr(&mut self, n: &mut Expr) {
        n.visit_mut_children_with(self);

        if let Expr::Member(member) = n {
            if let Expr::Ident(obj) = &*member.obj {
                // Проверяем что переменная используется для css модулей
                if !self.specifiers.contains(&obj.sym) {
                    return;
                }

                match &member.prop {
                    // Обработка прямого обращения
                    //
                    // styles.Component
                    MemberProp::Ident(i) => {
                        let exp = Expr::from(generate_scoped_name(i.sym.to_string()));

                        n.clone_from(&exp)
                    }

                    // Обращение к приватному полю. Не используется в css modules
                    //
                    // this.#message
                    MemberProp::PrivateName(_) => panic!("PrivateName not used in css modules"),

                    // Вычисляемое обращение
                    MemberProp::Computed(computed) => match &*computed.expr {
                        // Обрабатываем строку
                        //
                        // styles['Component--disabled']
                        Expr::Lit(Lit::Str(str_lit)) => {
                            let exp = Expr::from(generate_scoped_name(str_lit.value.to_string()));

                            n.clone_from(&exp)
                        }

                        // Обрабатываем шаблонную строку
                        //
                        // styles[`Component--mode-${mode}`]
                        Expr::Tpl(tpl) => {
                            let mut new_tpl = tpl.clone();
                            new_tpl.quasis[0].raw =
                                generate_scoped_name(tpl.quasis[0].raw.to_string()).into();

                            let exp = Expr::from(new_tpl);

                            n.clone_from(&exp)
                        }

                        // Выкинет панику при других обращениях
                        _ => todo!(),
                    },
                }
            }
        }
    }

    // Обработка импортов
    fn visit_mut_import_decl(&mut self, n: &mut ImportDecl) {
        n.visit_mut_children_with(self);

        // Проверяем что это импорт css modules
        if !n.src.value.ends_with(CSS_MODULES_SUFFIX) || n.specifiers.is_empty() {
            return;
        }

        // Вытаскиваем название переменной и кладем в вектор
        n.specifiers.iter().for_each(|specifier| match specifier {
            ImportSpecifier::Named(_) => todo!(),
            ImportSpecifier::Default(default) => self.specifiers.push(default.local.sym.clone()),
            ImportSpecifier::Namespace(namespace) => {
                self.specifiers.push(namespace.local.sym.clone())
            }
        });

        // Очищаем идентификатор
        //
        // import styles from "./Component.module.css";
        // ↓ ↓ ↓ ↓ ↓ ↓
        // import "./Component.module.css";
        n.specifiers.clear();
    }
}

#[plugin_transform]
fn process_transform(program: Program, _metadata: TransformPluginProgramMetadata) -> Program {
    program.fold_with(&mut as_folder(TransformVisitor::new()))
}
