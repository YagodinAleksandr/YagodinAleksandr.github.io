let setGreetingsTemplate = (obj) => {
    DOM.greetings.innerHTML =
   `<input type="radio" name="tabs" id="tab-1" checked>
    <input type="radio" name="tabs" id="tab-2">
    <input type="radio" name="tabs" id="tab-3">
    <div class="labels">
      <label class="label-1" for="tab-1"></label>
      <label class="label-2" for="tab-2"></label>
      <label class="label-3" for="tab-3"></label>
    </div>
    <div class="text for-tab-1">${obj.greetings.greetingsFirst}</div>
    <div class="text for-tab-2">${obj.greetings.greetingsSecond}</div>
    <div class="text for-tab-3">${obj.greetings.greetingsThird}</div>`
};
