basically it's divided in three parts

1.<label for="toggle">
2.<input type=checkbox id=toggle>
3.positioning the input (important)


label can be anywhere in html, what "for" attribute in label does is that, it binds the label with that input element which has the id 'toggle'.
so that when the label is clicked, checkbox will also be clicked


//Positioning the input tag
put input element just above the element you want to change.
for example there is an unordered list in html. and you want to toggle it whenever you click on label.
then put the input element just above the <ul> tag. [Note: make sure the list is wrapped in <ul> tag. it only supports one element after the input tag.]

<input type=checkbox id=toggle>
<ul>
<li>Category 1</li>
<li>Category 2</li>
</ul>


//CSS with pseudo class :checked

input:checked + ul{
visibility: normal}

input + ul{
visibility: hidden}

[Note: there is no pseudo class named :unchecked, for that just remove the :checked and it will act as event for unchecking]


