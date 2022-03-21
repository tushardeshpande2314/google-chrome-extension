
// const catagoryBtnContainer = document.getElementsByClassName('ext-list-catagories');
// const catgorySidepanelClose = document.getElementsByClassName('ext-catagory-closebtn');


// catagoryBtnContainer[0].addEventListener("click", () => {
//     document.getElementById("mySidepanel").style.width = "250px";
// });

// catgorySidepanelClose[0].addEventListener("click", () => {
//     document.getElementById("mySidepanel").style.width = "0px";
// });
  

const obj = [{
    title: "My coupon code is not working",
    summary: "This link provides an idea about the coupon code not working and i am in search for that",
    linkUrl: "https://google.com",
    imgUrl: "/images/hello.png",
    description: 'This links provides coupon code details'
  },
  {
    title: "My coupon code is working on mozzila",
    summary: "This link provides an idea about the coupon code not working and i am in search for that",
    linkUrl: "https://google.com",
    imgUrl: "/images/hello.png",
    description: 'This links provides coupon code details'
  },
  {
    title: "My coupon code is working on mozzila",
    summary: "This link provides an idea about the coupon code not working and i am in search for that",
    linkUrl: "https://google.com",
    imgUrl: "/images/hello.png",
    description: 'This links provides coupon code details'
  }
  ];
  
  const body = document.getElementById('ext-list-catagories');
//   const p = document.createElement('p');
//   const text = document.createTextNode('Test Test');
//   p.appendChild(text);
  
//   body.appendChild(p);
  const getDiv = createTableElement(obj);
  console.log(`Div element ${getDiv}`);
  body.appendChild(getDiv);
  
  function createTableDataElement() {
     const div = document.createElement('div');
     div.appendChild(createLinkElement());
     div.appendChild(createSummaryElements());
     div.appendChild(createButtonsElement());
    return div;
  }
  
  function createTableElement(obj2) {
      const table = document.getElementById('ext-suggestion-list');
    console.log(obj2.length);
    for( let i = 0; i<obj2.length; i+=1) {
      table.appendChild(createTableRowElement());
    }
    // table.appendChild(createTableRowElement());
    return table;
  }
  
  function createTableRowElement() {
      const row = document.createElement('tr');
    row.classList.add("border_bottom");
    const rowData = document.createElement('td');
    rowData.appendChild(createTableDataElement());
    row.appendChild(rowData);
    return row;
  }
  
  function createSummaryElements() {
      const  p = document.createElement('p');
    const summary =document.createTextNode('Hello this is text related to the link created');
    p.appendChild(summary);
    return p;
  }
  function createLinkElement(){
      const a = document.createElement('a');
    const linkText = document.createTextNode('My Suggestion title');
    a.appendChild(linkText);
    a.title = 'Suggestion';
    a.href = 'http://www.google.com';
    return a;
  }
  
  function createButtonsElement() {
      const buttonsMain = document.createElement('div');
    buttonsMain.setAttribute("id", "outer");
    const buttons = document.createElement('div');
    buttons.classList.add("inner");
    buttons.appendChild(createSingleButton('Like'));
    buttons.appendChild(createSingleButton('Dislike'));
    buttonsMain.appendChild(buttons);
      return buttonsMain;
  }
  
  
  function createSingleButton(text) {
  const button = document.createElement('button');
  const buttonText = document.createTextNode(text);
  button.appendChild(buttonText);
  return button;
  }
