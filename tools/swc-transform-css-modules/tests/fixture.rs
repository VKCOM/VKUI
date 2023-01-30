use std::path::PathBuf;

use swc_core::ecma::{
    parser::{EsConfig, Syntax},
    transforms::testing::test_fixture,
    visit::as_folder,
};
use swc_transform_css_modules::TransformVisitor;

fn syntax() -> Syntax {
    Syntax::Es(EsConfig {
        jsx: true,
        ..Default::default()
    })
}

#[testing::fixture("tests/fixture/**/input.js")]
fn fixture(input: PathBuf) {
    let output = input.parent().unwrap().join("output.js");

    test_fixture(
        syntax(),
        &|_| as_folder(TransformVisitor::new()),
        &input,
        &output,
        Default::default(),
    );
}
