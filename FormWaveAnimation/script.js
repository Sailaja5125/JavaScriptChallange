// more to develop
const labels = document.querySelectorAll('.form-control label');
// all labels are seleted
labels.forEach((label) => { // for each label the innerhtml text is split into individual characters and for each array the transition delay is given 
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, i) =>
        `<span style="transition-delay: ${i * 50}ms">${letter}</span>`
    )
    .join('');
});