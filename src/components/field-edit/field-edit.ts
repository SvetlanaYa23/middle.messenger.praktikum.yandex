const tpl = `
<div class="field-edit">
    <label class="field-edit__name" for="{{ name }}">{{ value }}</label>
    <input class="field-edit__value" type="{{ type }}" name="{{ name }}" id="{{ id }}" value="{{ inputValue }}">
</div>
`;

export default tpl;
