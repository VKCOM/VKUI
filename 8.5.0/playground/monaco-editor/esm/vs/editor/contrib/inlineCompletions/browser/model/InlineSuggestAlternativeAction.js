var InlineSuggestAlternativeAction;
(function (InlineSuggestAlternativeAction) {
    function toString(action) {
        return action?.command.id ?? undefined;
    }
    InlineSuggestAlternativeAction.toString = toString;
})(InlineSuggestAlternativeAction || (InlineSuggestAlternativeAction = {}));

export { InlineSuggestAlternativeAction };
