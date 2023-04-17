const formField = document.getElementById('formField');
document.addEventListener('DOMContentLoaded', function () {
    if ($(window).width() > 768) { formField.style.padding = '3%' }
})

const button1m = document.getElementById('components/mobile/tabs-m.html/pills-home-tab-m');
const button2m = document.getElementById('components/mobile/tabs-m.html/pills-profile-tab-m');
const button3m = document.getElementById('components/mobile/tabs-m.html/pills-contact-tab-m');

const tabButtonsm = document.querySelectorAll('.mobile-tabs .tab-btn');
const tabContentsm = document.querySelectorAll('.mobile-tabs .tab-content');

tabButtonsm.forEach(function (tabButton) {
    tabButton.addEventListener('click', function () {
        // deactivate all tab panes
        tabContentsm.forEach(function (tabContent) {
            tabContent.classList.remove('active', 'show');
        });

        // activate the corresponding tab pane
        const target = document.querySelector(tabButton.getAttribute('data-bs-target'));
        target.classList.add('active', 'show');
    });
});

button2m.addEventListener('click', function () {
    document.getElementById('components/mobile/tabs-m.html/pills-home-tab-m').style.backgroundColor = '#FFFFFF52';
    document.getElementById('components/mobile/tabs-m.html/pills-contact-tab-m').style.backgroundColor = '#FFFFFF52';
    document.getElementById('components/mobile/tabs-m.html/pills-home-tab-m').style.boxShadow = 'none';
    document.getElementById('components/mobile/tabs-m.html/pills-contact-tab-m').style.boxShadow = 'none';

    this.style.backgroundColor = '#ED6838';
    this.style.boxShadow = '0px 0px 12px rgba(251, 97, 42, 0.4)';

    document.getElementById('components/mobile/tabs-m.html/text1').style.color = '#000';
    document.getElementById('components/mobile/tabs-m.html/text2').style.color = '#fff';
    document.getElementById('components/mobile/tabs-m.html/text3').style.color = '#000';
});
button1m.addEventListener('click', function () {
    document.getElementById('components/mobile/tabs-m.html/pills-profile-tab-m').style.backgroundColor = '#FFFFFF52';
    document.getElementById('components/mobile/tabs-m.html/pills-contact-tab-m').style.backgroundColor = '#FFFFFF52';
    document.getElementById('components/mobile/tabs-m.html/pills-profile-tab-m').style.boxShadow = 'none';
    document.getElementById('components/mobile/tabs-m.html/pills-contact-tab-m').style.boxShadow = 'none';

    this.style.backgroundColor = '#ED6838';
    this.style.boxShadow = '0px 0px 12px rgba(251, 97, 42, 0.4)';

    document.getElementById('components/mobile/tabs-m.html/text1').style.color = '#fff';
    document.getElementById('components/mobile/tabs-m.html/text2').style.color = '#000';
    document.getElementById('components/mobile/tabs-m.html/text3').style.color = '#000';
});
button3m.addEventListener('click', function () {
    document.getElementById('components/mobile/tabs-m.html/pills-home-tab-m').style.backgroundColor = '#FFFFFF52';
    document.getElementById('components/mobile/tabs-m.html/pills-profile-tab-m').style.backgroundColor = '#FFFFFF52';
    document.getElementById('components/mobile/tabs-m.html/pills-home-tab-m').style.boxShadow = 'none';
    document.getElementById('components/mobile/tabs-m.html/pills-profile-tab-m').style.boxShadow = 'none';

    this.style.backgroundColor = '#ED6838';
    this.style.boxShadow = '0px 0px 12px rgba(251, 97, 42, 0.4)';

    document.getElementById('components/mobile/tabs-m.html/text1').style.color = '#000';
    document.getElementById('components/mobile/tabs-m.html/text2').style.color = '#000';
    document.getElementById('components/mobile/tabs-m.html/text3').style.color = '#fff';
});




const button1 = document.getElementById('components/desktop/tabs-d.html/pills-home-tab');
const button2 = document.getElementById('components/desktop/tabs-d.html/pills-profile-tab');
const button3 = document.getElementById('components/desktop/tabs-d.html/pills-contact-tab');

const tabButtons = document.querySelectorAll('.nav-link');
const tabContents = document.querySelectorAll('.tab-pane');

tabButtons.forEach(function (tabButton) {
    tabButton.addEventListener('click', function () {
        // deactivate all tab panes
        tabContents.forEach(function (tabContent) {
            tabContent.classList.remove('active', 'show');
        });

        // activate the corresponding tab pane
        const target = document.querySelector(tabButton.getAttribute('data-bs-target'));
        target.classList.add('active', 'show');
    });
});

button2.addEventListener('click', function () {
    document.getElementById('components/desktop/tabs-d.html/pills-home-tab').style.backgroundColor = '#FFFFFF52';
    document.getElementById('components/desktop/tabs-d.html/pills-contact-tab').style.backgroundColor = '#FFFFFF52';
    document.getElementById('components/desktop/tabs-d.html/pills-home-tab').style.boxShadow = 'none';
    document.getElementById('components/desktop/tabs-d.html/pills-contact-tab').style.boxShadow = 'none';

    this.style.backgroundColor = '#ED6838';
    this.style.boxShadow = '0px 0px 12px rgba(251, 97, 42, 0.4)';

    document.getElementById('components/desktop/tabs-d.html/text1-d').style.color = '#000';
    document.getElementById('components/desktop/tabs-d.html/text2-d').style.color = '#fff';
    document.getElementById('components/desktop/tabs-d.html/text3-d').style.color = '#000';
});
button1.addEventListener('click', function () {

    document.getElementById('components/desktop/tabs-d.html/pills-profile-tab').style.backgroundColor = '#FFFFFF52';
    document.getElementById('components/desktop/tabs-d.html/pills-contact-tab').style.backgroundColor = '#FFFFFF52';
    document.getElementById('components/desktop/tabs-d.html/pills-profile-tab').style.boxShadow = 'none';
    document.getElementById('components/desktop/tabs-d.html/pills-contact-tab').style.boxShadow = 'none';

    this.style.backgroundColor = '#ED6838';
    this.style.boxShadow = '0px 0px 12px rgba(251, 97, 42, 0.4)';

    document.getElementById('components/desktop/tabs-d.html/text1-d').style.color = '#fff';
    document.getElementById('components/desktop/tabs-d.html/text2-d').style.color = '#000';
    document.getElementById('components/desktop/tabs-d.html/text3-d').style.color = '#000';
});
button3.addEventListener('click', function () {
    document.getElementById('components/desktop/tabs-d.html/pills-home-tab').style.backgroundColor = '#FFFFFF52';
    document.getElementById('components/desktop/tabs-d.html/pills-profile-tab').style.backgroundColor = '#FFFFFF52';
    document.getElementById('components/desktop/tabs-d.html/pills-home-tab').style.boxShadow = 'none';
    document.getElementById('components/desktop/tabs-d.html/pills-profile-tab').style.boxShadow = 'none';

    this.style.backgroundColor = '#ED6838';
    this.style.boxShadow = '0px 0px 12px rgba(251, 97, 42, 0.4)';

    document.getElementById('components/desktop/tabs-d.html/text1-d').style.color = '#000';
    document.getElementById('components/desktop/tabs-d.html/text2-d').style.color = '#000';
    document.getElementById('components/desktop/tabs-d.html/text3-d').style.color = '#fff';
});
//highlights
const issues = [
    {
        cover: [
            "img/images/Issue1/2.png",
            "img/images/Issue1/5.png",
            "img/images/Issue1/6.png",
            "img/images/Issue1/10.png",
            "img/images/Issue1/13.png",
        ],
        title: "Issue #1",
        description: "Introducing The Quarterly All Hands, a modern magazine and the next evolution of Chief of Stuff. Its pages are filled with snappy and substantive articles, unique interviews, and insights.",
        paymentLink: "https://app.gumroad.com/checkout?product=nrpwv&amp;quantity=1&code=welcome",
        paymentLinkNoOffer: "https://app.gumroad.com/checkout?product=nrpwv&amp;quantity=1",
        highlightContent: [
            {
                title: "One to One",
                description: "I sat down with documentary filmmaker Brent Hodge to hear his experience following the “Most Hated Man in America” for his film Pharma Bro",
                src: "img/icons/highlights/h2.png",
            },
            {
                title: "Product Overview",
                description: "A deep dive into sustainable brands that are building a better future - starting with my favorite company, Rent the Runway.",
                src: "img/icons/highlights/h1.png",
            },
            {
                title: "Decoding Color:",
                description: "Leading visual merchandiser and color enthusiast Julie Boss kicks off a new series about one of my favorite topics - color!",
                src: "img/icons/highlights/h3.png",
            },
            {
                title: "The Magic of Mushrooms:",
                description: "In the Engineering update, I explore how one of the misunderstood organisms in nature could actually save us.",
                src: "img/icons/highlights/h4.png",
            },
            {
                title: "PLUS:",
                description: "a compilation of favorite films, restaurants, books, wellness recommendations and so much more!",
                src: "img/icons/highlights/h5.png",
            },
        ]
    },
    {
        cover: [
            "img/images/Issue2/7.png",
            "img/images/Issue2/16.png",
            "img/images/Issue2/18.png",
            "img/images/Issue2/26.png",
            "img/images/Issue2/27.png",

        ],
        title: "Issue #2",
        description: "The Second Issue takes inspiration from Chief of Stuff’s spiritual home of Greece, celebrates Innovators, and explores New Worlds.As you scroll through, I hope you're inspired to explore new places (real and imaginary), connect with more people, and engage your senses in new ways!",
        paymentLink: "https://app.gumroad.com/checkout?product=sgssd&amp;quantity=1&code=welcome",
        paymentLinkNoOffer: "https://app.gumroad.com/checkout?product=sgssd&amp;quantity=1",
        highlightContent: [
            {
                title: "Innovations in Ice Cream:",
                description: "I sat down with Tyler Malek, the co-founder of Salt & Straw to discuss their novel creation, Culinary Perfume, to learn how our sense of smell has the power to unlock an entire new way to experience food.",
                src: "img/icons/highlights/h6.png",
            },
            {
                title: "Meet Me in the Metaverse:",
                description: "I chat with Carmen Lambrianos about developments in Web3 and the unexpected group that’s pioneering the future.",
                src: "img/icons/highlights/h7.png",
            },
            {
                title: "Escape to the Islands:",
                description: "Our “hero” story, featuring the beautiful artwork of Rachael Gan, explores my favorite hidden gems in the Cycladic Islands.",
                src: "img/icons/highlights/h8.png",
            },
            {
                title: "The Unexpected Alchemist:",
                description: "In my One on One, ceramist and sculptor Zoe Lloyd talks about how her unique process allows her pieces to literally defy gravity.",
                src: "img/icons/highlights/h2.png",
            },
            {
                title: "Looking Ahead:",
                description: "As you plan out Fall, Connor Swenson offers wisdom on how to gracefully ease back into school/work/life mode.",
                src: "img/icons/highlights/h9.png",
            },
        ]
    },
    {
        cover: [
            "img/images/Issue3/3.png",
            "img/images/Issue3/7.png",
            "img/images/Issue3/16.png",
            "img/images/Issue3/26.png",
            "img/images/Issue3/27.png",

        ],
        title: "Issue #3",
        description: "Our Third Issue is centered around exploration and people. We ventured all over, from Sweden to Brazil, in search of the people who are reinventing old systems, questioning the status quo, and protecting fundamental values. We asked a ton of questions and we are certain that the answers among these pages will surprise and delight you.",
        paymentLink: "https://app.gumroad.com/checkout?product=sgssd&amp;quantity=1&code=welcome",
        paymentLinkNoOffer: "https://app.gumroad.com/checkout?product=sgssd&amp;quantity=1",
        highlightContent: [
            {
                title: "One on One with Barnaby Barford:",
                description: "The acclaimed artist gives us insight into his new book addressing the complex nature of the most unassuming, yet most representative of all fruits... the apple.",
                src: "img/icons/highlights/h2.png",
            },
            {
                title: "Crypto 101: Bitcoin and Beyond:",
                description: "We explain the fundamentals of crypto and what’s necessary for this new financial system to properly function in a modern world.",
                src: "img/icons/highlights/h7.png",
            },
            {
                title: "Innovations in Salt:",
                description: "Ingrid and Niklas Mun̈ch, the duo behind ALLTGOTT salt infusions, show us how one little jar can enhance more than just flavor.",
                src: "img/icons/highlights/h6.png",
            },
            {
                title: "Decoding Color:",
                description: "Julie Boss explores how color makes us feel, the psychology of color and how you can discover your power color!",
                src: "img/icons/highlights/h3.png",
            },
            {
                title: "Rest of World - The Hidden Gems of Brazil:",
                description: "In this new series we uncover what makes a country like Brazil truly shine.",
                src: "img/icons/highlights/h8.png",
            },
            {
                title: "Holiday Stuff Special:",
                description: "Just in time for Christmas. Here you can find our tips for thriving this holiday season, gift inspo and exclusive, festive party hacks and more!",
                src: "img/icons/highlights/h10.png",
            },

        ]
    },
    {
        cover: [
            "img/images/Issue4/1.png",
            "img/images/Issue4/2.png",
            "img/images/Issue4/3.png",
            "img/images/Issue4/4.png",
            "img/images/Issue4/5.png",

        ],
        title: "Issue #4",
        description: "Our Fourth Issue examines the tension between artificial intelligence and human originality. We believe that good things take time, but tech can be a helpful asset if used wisely. If innovations make our lives easier, then we can use our resources wisely and dedicate our energy to explore the stuff we love.",
        paymentLink: "https://app.gumroad.com/checkout?product=fjsnw&amp;quantity=1&code=BOREDLEVEL",
        paymentLinkNoOffer: "https://app.gumroad.com/checkout?product=fjsnw&amp;quantity=1",
        highlightContent: [
            {
                title: "Stop to Smell the Roses:",
                description: "The history of the English rose and the man behind the bouquet.",
                src: "img/icons/highlights/h8.png",
            },
            {
                title: "One on One with Hiroko Imada:",
                description: "The acclaimed artist and teacher discusses the unique practice of Japanese woodblock printing.",
                src: "img/icons/highlights/h2.png",
            },
            {
                title: "Humans vs. Machines:",
                description: "A look at ChatGPT and the impact of generative AI.",
                src: "img/icons/highlights/h4.png",
            },
            {
                title: "Decoding Color:",
                description: "Special guest Allison Holman explains 12-season Color Analysis and how to embrace your natural beauty.",
                src: "img/icons/highlights/h3.png",
            },
            {
                title: "Rise & Shine:",
                description: "Introducing new products and brands that are reinventing our morning routines.",
                src: "img/icons/highlights/h1.png",
            },
            {
                title: "Find Your Flock:",
                description: "How to cultivate connection through passions, hobbies, and interests.",
                src: "img/icons/highlights/h9.png",
            },
        ]
    }
];


var issueNo = issues.length - 1;
var imgNo = 0;
var linkMob = issues[issues.length - 1].paymentLink;
var linkDesktop = issues[issues.length - 1].paymentLink;
// Get the value of the subscriber variable from the URL
const urlParams = new URLSearchParams(window.location.search);
const subscriber = urlParams.get('subscriber');

// Check if the value is true or false
if (subscriber !== null) {
    if (subscriber === 'true') {
        linkMob = issues[issues.length - 1].paymentLink;
        linkDesktop = issues[issues.length - 1].paymentLink;
    } else {
        linkMob = issues[issues.length - 1].paymentLinkNoOffer;
        linkDesktop = issues[issues.length - 1].paymentLinkNoOffer;
    }
}
else {

    linkMob = issues[issueNo].paymentLinkNoOffer;
    linkDesktop = issues[issueNo].paymentLinkNoOffer;
}


document.addEventListener('DOMContentLoaded', function () {
    const mag = document.getElementById('magDiscription');
    const mag22 = document.getElementById('magTitle');
    mag22.textContent = issues[issueNo].title;
    mag.textContent = issues[issueNo].description;



    const magHead = document.getElementById('mag-head-d');
    const magHeadM = document.getElementById('mag-head-m');

    const con = document.getElementById('magImages');

    for (let i = 0; i < issues[issueNo].cover.length; i++) {
        // Create a new div element
        const newDiv = document.createElement("button");

        // Set the class and style attributes of the div
        newDiv.setAttribute("class", "btn");
        newDiv.setAttribute("id", "mag-d");

        // Add the code to the innerHTML of the div
        newDiv.innerHTML = `
        <div class="col" id="mag1-div" style=" width:8vw; border: none;
                        border-radius: 16px;background-color: #E9E5DE;padding: 10%;margin-bottom: 2%;">
                        <img src="img/images/mag1.png" class="img-fluid" id="mag-img2" alt="Your Image"
                          style="filter: drop-shadow(0px 4px 24px rgba(47, 19, 9, 0.24));"/>
                      </div>
      `;

        // Add the new div to the container element
        con.appendChild(newDiv);
    }
    const imagenn = document.querySelectorAll('#mag-img2');

    magHead.setAttribute('src', issues[issueNo].cover[0]);

    for (let i = 0; i < issues[issueNo].cover.length; i++) {
        imagenn[i].setAttribute('src', issues[issueNo].cover[i]);

    }

    for (let i = 0; i < imagenn.length; i++) {
        imagenn[i].addEventListener('click', function () {
            magHead.setAttribute('src', issues[issueNo].cover[i]);

            imgNo = i;

        })
    }

    const contain = document.getElementById('highlightsTab');

    for (let i = 0; i < issues[issueNo].highlightContent.length; i++) {
        // Create a new div element
        const newDiv = document.createElement("div");

        // Set the class and style attributes of the div
        newDiv.setAttribute("class", "container");
        newDiv.setAttribute("style", "border-radius: 16px; padding: 2px; padding-top:10px; padding-bottom:10px; background: #FAF8F4;margin: 0.5vw;width:100%");

        // Add the code to the innerHTML of the div
        newDiv.innerHTML = `

        <div class="row" style="width:100%">
        <div class="col-md-3 d-flex align-items-center justify-content-center" >
        
        <button class="btn btn-light" style="
                          width: 54px;
                          height: 54px;
                          border: none;
                          background-color: #ED683866;
                          border-radius: 16px;
                        ">
                      <img src="img/images/car4.png" alt="yourimage" style="width: 100%; height: auto" id="highIm" />
                    </button>
        </div>
        <div class="col-md-9 d-flex flex-column justify-content-center" style="justify-self: flex-start;">

        <h1 id="highText" class="fw mb-0" style="
        font-family: Merriweather;
        font-size: 1vw;
        font-weight: 700;

        ">I love the variety and mix of topics that Chief of Stuff covers - it's always so interesting!</h1>
        <h1 id="highSubText" class="fw mb-0" style="
        color:#000000B8;
        font-family: Inter;
        font-size: 1vw;
        font-weight: 400;
        margin-top: 2%;
        ">- Matt</h1>
        </div>
        </div>
        `;

        // Add the new div to the container element
        contain.appendChild(newDiv);
    }

    const image = document.querySelectorAll('#highIm');
    const highText = document.querySelectorAll('#highText');
    const highSubText = document.querySelectorAll('#highSubText');

    for (let i = 0; i < issues[issueNo].highlightContent.length; i++) {
        image[i].setAttribute('src', issues[issueNo].highlightContent[i].src);
        highText[i].innerText = `${issues[issueNo].highlightContent[i].title}`;
        highSubText[i].innerText = `${issues[issueNo].highlightContent[i].description}`;
    }

    const c2 = document.getElementById('highlightsTab2');

    for (let i = 0; i < issues[issueNo].highlightContent.length; i++) {
        // Create a new div element
        const newDiv = document.createElement("div");

        // Set the class and style attributes of the div
        newDiv.setAttribute("class", "col");
        newDiv.setAttribute("style", "border-radius: 16px; padding: 12px;padding-bottom:0px;padding-top:12px; background: #FAF8F4;margin: 1vw;width:100%");

        // Add the code to the innerHTML of the div
        newDiv.innerHTML = `
        
  <div class="row">
    <div class="col-3">
    <button class="btn btn-light" style="
          width: 54px;
          height: 54px;
          background-color:#ED683866;
          border: none;
          border-radius: 16px;
        ">
      <img src="img/icons/arti.png" alt="image-description-here" style="width: 100%; " id="highIm2" />
    </button>
    </div>
    <div class="col-9 d-flex flex-column justify-items-center">
    <div class="col">
      

      <p id="highText2" class=" d-block d-sm-none" style="
            font-family: Merriweather;
            font-weight: 900;
            font-size: 3.5vw;
          ">
          Stop to Smell the Roses:
      </p>
    </div>
    <div class="col">

      <p id="highSubText2" class="text-break d-block d-sm-none" style="
            font-family: Inter;
            font-weight: 500;
            font-size: 3vw;
          ">
          The history of the English rose and the man behind the bouquet.
      </p>
    </div>
    </div>
  </div>
  `;

        // Add the new div to the container element
        c2.appendChild(newDiv);
    }


    const image2 = document.querySelectorAll('#highIm2');
    const highText2 = document.querySelectorAll('#highText2');
    const highSubText2 = document.querySelectorAll('#highSubText2');


    for (let i = 0; i < issues[issueNo].highlightContent.length; i++) {
        image2[i].setAttribute('src', issues[issueNo].highlightContent[i].src);
        highText2[i].innerText = `${issues[issueNo].highlightContent[i].title}`;
        highSubText2[i].innerText = `${issues[issueNo].highlightContent[i].description}`;
    }

    const container = document.getElementById('issuesDiv');

    // Loop through the desired number of elements and create them
    for (let i = 0; i < issues.length; i++) {
        // Create a new div element
        const newDiv = document.createElement("div");

        // Set the class and style attributes of the div
        newDiv.setAttribute("class", "col container");
        newDiv.setAttribute("style", "margin: 1%;");

        // Add the code to the innerHTML of the div
        newDiv.innerHTML = `
          <div class="col" id="issueContainer">
            <div class="col" style="border-radius: 16px;background-color: #F1EFEA;padding: 10%;">
              <img src="img/images/mag.png" id="issuesImg" class="img-fluid" alt="Your Image"
                style="filter: drop-shadow(0px 4px 24px rgba(47, 19, 9, 0.24));cursor: pointer; ">
            </div>
            <div class="col">
              <p class="text" id="issuesText" style="font-family: Inter;
                font-size: 24px;
                font-weight: 500;
                line-height: 40px;
                letter-spacing: 0em;
                text-align: left;margin-top: 2%;">Issue #3</p>
            </div>
          </div>
        `;

        // Add the new div to the container element
        container.appendChild(newDiv);


    }

    const images = document.querySelectorAll('#issuesImg');
    const issueText = document.querySelectorAll('#issuesText');


    for (let i = 0; i < images.length; i++) {
        let j = images.length - i - 1;
        images[i].setAttribute('src', issues[j].cover[0]);
        issueText[i].innerText = `${issues[j].title}`;
    }


    const magHeadText = document.getElementById('magTitle');
    const magHeadDisc = document.getElementById('magDiscription');
    const getNowBtn = document.getElementById('getNowBtn');
    var payment = issues[0].paymentLink;


    for (let i = 0; i < images.length; i++) {
        let j = images.length - i - 1;

        images[i].addEventListener('click', function () {
            payment = issues[issues.length - i - 1].paymentLink;
            payLink = payment;

            issueNo = j;
            magHead.setAttribute('src', issues[j].cover[0]);
            magHeadText.innerText = `${issues[j].title}`;
            magHeadDisc.innerText = `${issues[j].description}`;
            magHeadDisc.innerText = `${issues[j].description}`;
            console.log(issueNo);




            const con = document.getElementById('magImages');
            console.log(issues[issueNo].cover.length);
            while (con.firstChild) {
                console.log('removed');
                con.removeChild(con.firstChild);
            }

            for (let i = 0; i < issues[issueNo].cover.length; i++) {
                // Create a new div element
                const newDiv = document.createElement("button");

                // Set the class and style attributes of the div
                newDiv.setAttribute("class", "btn");
                newDiv.setAttribute("id", "mag-d");

                // Add the code to the innerHTML of the div
                newDiv.innerHTML = `
        <div class="col" id="mag1-div" style=" width:10vw; border: none;
                        border-radius: 16px;background-color: #E9E5DE;padding: 10%;margin-bottom: 2%;">
                        <img src="img/images/mag1.png" class="img-fluid" id="mag-im" alt="Your Image"
                          style="filter: drop-shadow(0px 4px 24px rgba(47, 19, 9, 0.24));"/>
                      </div>
      `;

                // Add the new div to the container element
                con.appendChild(newDiv);
            }
            const im = document.querySelectorAll('#mag-im');
            const im2 = document.querySelectorAll('#mag-head-d');
            magHead.setAttribute('src', issues[issueNo].cover[0]);



            for (let i = 0; i < issues[issueNo].cover.length; i++) {
                im[i].setAttribute('src', issues[issueNo].cover[i]);

            }

            for (let i = 0; i < im.length; i++) {
                im[i].addEventListener('click', function () {

                    magHead.setAttribute('src', issues[issueNo].cover[i]);
                    imgNo = i;

                })
            }






            const contain = document.getElementById('highlightsTab');
            while (contain.firstChild) {
                console.log('removed');
                contain.removeChild(contain.firstChild);
            }




            for (let i = 0; i < issues[issueNo].highlightContent.length; i++) {
                // Create a new div element
                const newDiv = document.createElement("div");

                // Set the class and style attributes of the div
                newDiv.setAttribute("class", "container");
                newDiv.setAttribute("style", "border-radius: 16px; padding: 2px; padding-top:10px; padding-bottom:10px; background: #FAF8F4;margin: 0.5vw;width:100%");

                // Add the code to the innerHTML of the div
                newDiv.innerHTML = `

        <div class="row" style="width:100%">
        <div class="col-md-3 d-flex align-items-center justify-content-center" >
        
        <button class="btn btn-light" style="
                          width: 54px;
                          height: 54px;
                          border: none;
                          background-color: #ED683866;
                          border-radius: 16px;
                        ">
                      <img src="img/images/car4.png" alt="yourimage" style="width: 100%; height: auto" id="highIm" />
                    </button>
        </div>
        <div class="col-md-9 d-flex flex-column justify-content-center" style="justify-self: flex-start;">

        <h1 id="highText" class="fw mb-0" style="
        font-family: Merriweather;
        font-size: 1vw;
        font-weight: 700;

        ">I love the variety and mix of topics that Chief of Stuff covers - it's always so interesting!</h1>
        <h1 id="highSubText" class="fw mb-0" style="
        color:#000000B8;
        font-family: Inter;
        font-size: 1vw;
        font-weight: 400;
        margin-top: 2%;
        ">- Matt</h1>
        </div>
        </div>
        `;


                // Add the new div to the container element
                contain.appendChild(newDiv);
            }

            const image = document.querySelectorAll('#highIm');
            const highText = document.querySelectorAll('#highText');
            const highSubText = document.querySelectorAll('#highSubText');

            console.log('=========issueNo down');
            console.log(issueNo);

            for (let i = 0; i < issues[issueNo].highlightContent.length; i++) {

                image[i].setAttribute('src', issues[issueNo].highlightContent[i].src);
                highText[i].innerText = `${issues[issueNo].highlightContent[i].title}`;
                highSubText[i].innerText = `${issues[issueNo].highlightContent[i].description}`;
            }

        });
    }
    // Mobile Tabs Query

    const mobileMag = document.getElementById('mobileMag');
    const mobileIssueText = document.getElementById('mobileIssueText');
    const mobileIssueSubText = document.getElementById('mobileIssueSubText');

    for (let i = 0; i < issues[issueNo].cover.length; i++) {
        // Create a new div element
        const newDiv = document.createElement("button");

        // Set the class and style attributes of the div
        newDiv.setAttribute("class", "btn p-0");
        newDiv.setAttribute("id", "mag-img-m");


        // Add the code to the innerHTML of the div
        newDiv.innerHTML = `
      <div class="col" id="mag-divi-m" style=" width: 12vw; height: 12vw; border: none;
                      border-radius: 16px;background-color: #E9E5DE;padding: 20%;">
                        <img src="img/images/mag1.png" class="img-fluid" id="mag-imgas-m" alt="Your Image"
                          style="filter: drop-shadow(0px 4px 24px rgba(47, 19, 9, 0.24));"/>
                      </div>
      `;

        // Add the new div to the container element
        mobileMag.appendChild(newDiv);
    }

    const mobileMagImages = document.querySelectorAll('#mag-imgas-m');
    const mobileMag2 = document.querySelectorAll('#mag-head-m');



    magHeadM.setAttribute('src', issues[issueNo].cover[0]);
    mobileIssueText.innerText = `${issues[issueNo].title}`;
    mobileIssueSubText.innerText = `${issues[issueNo].description}`;



    for (let i = 0; i < issues[issueNo].cover.length; i++) {
        mobileMagImages[i].setAttribute('src', issues[issueNo].cover[i]);

        mobileMagImages[i].addEventListener('click', function () {
            imgNo = i;
            magHeadM.setAttribute('src', issues[issueNo].cover[i]);
        })
    }
    const prevBtn = document.getElementById('prevMob');
    const nextBtn = document.getElementById('nextMob');


    // PREV BUTTON

    prevBtn.addEventListener('click', function () {
        if (issueNo == issues.length - 1) {
            issueNo = 0;
        } else {
            issueNo = issueNo + 1;
        }

        const mobCaro = document.getElementById('mobCaro');
        while (mobCaro.firstChild) {
            console.log('removed');
            mobCaro.removeChild(mobCaro.firstChild);
        }

        for (let i = 0; i < issues[issueNo].cover.length; i++) {
            // Create a new div element
            const newDiv = document.createElement("div");

            // Set the class and style attributes of the div
            if (i == 0) {
                newDiv.setAttribute("class", "carousel-item active");

            } else {
                newDiv.setAttribute("class", "carousel-item");

            }

            // Add the code to the innerHTML of the div
            newDiv.innerHTML = `
  <div class="row">
    <div class="col-xs-6">
      <img class="img-fluid mx-auto"  src="img/images/issue2.png" alt="Image 1" style="width: 90vw;" id="caroMobImg"/>
      <p class="text" style="font-family: Inter;
          font-size: 24px;
          font-weight: 500;
          line-height: 40px;
          letter-spacing: 0em;
          text-align: left;margin-top: 2%;" id="caroMobText">Issue #2</p>
    </div>

  </div>
`;

            // Add the new div to the container element
            mobCaro.appendChild(newDiv);

        }

        const caroMobImg = document.querySelectorAll('#caroMobImg');
        const caroMobText = document.querySelectorAll('#caroMobText');



        for (let i = 0; i < issues[issueNo].cover.length; i++) {
            caroMobImg[i].setAttribute('src', issues[issueNo].cover[0]);
            caroMobText[i].innerText = `${issues[issueNo].title}`;
        }

        const mobileMag = document.getElementById('mobileMag');
        while (mobileMag.firstChild) {
            console.log('removed');
            mobileMag.removeChild(mobileMag.firstChild);
        }
        const mobileIssueText = document.getElementById('mobileIssueText');
        const mobileIssueSubText = document.getElementById('mobileIssueSubText');

        for (let i = 0; i < issues[issueNo].cover.length; i++) {
            // Create a new div element
            const newDiv = document.createElement("button");

            // Set the class and style attributes of the div
            newDiv.setAttribute("class", "btn p-0");
            newDiv.setAttribute("id", "mag-img-m");

            // Add the code to the innerHTML of the div
            newDiv.innerHTML = `
      <div class="col" id="mag-divi-m" style=" width: 12vw; height: 12vw; border: none;
                      border-radius: 16px;background-color: #E9E5DE;padding: 20%;">
                        <img src="img/images/mag1.png" class="img-fluid" id="mag-imgas-m" alt="Your Image"
                          style="filter: drop-shadow(0px 4px 24px rgba(47, 19, 9, 0.24));"/>
                      </div>
      `;

            // Add the new div to the container element
            mobileMag.appendChild(newDiv);
        }

        const mobileMagImages = document.querySelectorAll('#mag-imgas-m');
        const mobileMag2 = document.querySelectorAll('#mag-head-m');

        magHeadM.setAttribute('src', issues[issueNo].cover[0]);
        mobileIssueText.innerText = `${issues[issueNo].title}`;
        mobileIssueSubText.innerText = `${issues[issueNo].description}`;


        for (let i = 0; i < issues[issueNo].cover.length; i++) {
            mobileMagImages[i].setAttribute('src', issues[issueNo].cover[i]);
            mobileMagImages[i].addEventListener('click', function () {
                imgNo = i;
                magHeadM.setAttribute('src', issues[issueNo].cover[i]);
            })
        }

        const c2 = document.getElementById('highlightsTab2');
        while (c2.firstChild) {
            c2.removeChild(c2.firstChild);
        }

        for (let i = 0; i < issues[issueNo].highlightContent.length; i++) {
            // Create a new div element
            const newDiv = document.createElement("div");

            // Set the class and style attributes of the div
            newDiv.setAttribute("class", "col");
            newDiv.setAttribute("style", "border-radius: 16px; padding: 12px;padding-bottom:0px;padding-top:12px; background: #FAF8F4;margin: 1vw;width:100%");

            // Add the code to the innerHTML of the div
            newDiv.innerHTML = `
        
  <div class="row">
    <div class="col-3">
    <button class="btn btn-light" style="
          width: 54px;
          height: 54px;
          background-color:#ED683866;
          border: none;
          border-radius: 16px;
        ">
      <img src="img/icons/arti.png" alt="image-description-here" style="width: 100%; " id="highIm2" />
    </button>
    </div>
    <div class="col-9 d-flex flex-column justify-items-center">
    <div class="col">
      

      <p id="highText2" class=" d-block d-sm-none" style="
            font-family: Merriweather;
            font-weight: 900;
            font-size: 3.5vw;
          ">
          Stop to Smell the Roses:
      </p>
    </div>
    <div class="col">

      <p id="highSubText2" class="text-break d-block d-sm-none" style="
            font-family: Inter;
            font-weight: 500;
            font-size: 3vw;
          ">
          The history of the English rose and the man behind the bouquet.
      </p>
    </div>
    </div>
  </div>
  `;

            // Add the new div to the container element
            c2.appendChild(newDiv);
        }


        const image2 = document.querySelectorAll('#highIm2');
        const highText2 = document.querySelectorAll('#highText2');
        const highSubText2 = document.querySelectorAll('#highSubText2');


        for (let i = 0; i < issues[issueNo].highlightContent.length; i++) {
            image2[i].setAttribute('src', issues[issueNo].highlightContent[i].src);
            highText2[i].innerText = `${issues[issueNo].highlightContent[i].title}`;
            highSubText2[i].innerText = `${issues[issueNo].highlightContent[i].description}`;
        }






    })

    // NEXT BUTTON
    nextBtn.addEventListener('click', function () {
        if (issueNo == 0) {
            issueNo = issues.length - 1;
        } else {
            issueNo = issueNo - 1;
        }
        const c2 = document.getElementById('highlightsTab2');
        while (c2.firstChild) {
            c2.removeChild(c2.firstChild);
        }

        for (let i = 0; i < issues[issueNo].highlightContent.length; i++) {
            // Create a new div element
            const newDiv = document.createElement("div");

            // Set the class and style attributes of the div
            newDiv.setAttribute("class", "col");
            newDiv.setAttribute("style", "border-radius: 16px; padding: 12px;padding-bottom:0px;padding-top:12px; background: #FAF8F4;margin: 1vw;width:100%");

            // Add the code to the innerHTML of the div
            newDiv.innerHTML = `
        
  <div class="row">
    <div class="col-3">
    <button class="btn btn-light" style="
          width: 54px;
          height: 54px;
          background-color:#ED683866;
          border: none;
          border-radius: 16px;
        ">
      <img src="img/icons/arti.png" alt="image-description-here" style="width: 100%; " id="highIm2" />
    </button>
    </div>
    <div class="col-9 d-flex flex-column justify-items-center">
    <div class="col">
      

      <p id="highText2" class=" d-block d-sm-none" style="
            font-family: Merriweather;
            font-weight: 900;
            font-size: 3.5vw;
          ">
          Stop to Smell the Roses:
      </p>
    </div>
    <div class="col">

      <p id="highSubText2" class="text-break d-block d-sm-none" style="
            font-family: Inter;
            font-weight: 500;
            font-size: 3vw;
          ">
          The history of the English rose and the man behind the bouquet.
      </p>
    </div>
    </div>
  </div>
  `;

            // Add the new div to the container element
            c2.appendChild(newDiv);
        }


        const image2 = document.querySelectorAll('#highIm2');
        const highText2 = document.querySelectorAll('#highText2');
        const highSubText2 = document.querySelectorAll('#highSubText2');


        for (let i = 0; i < issues[issueNo].highlightContent.length; i++) {
            image2[i].setAttribute('src', issues[issueNo].highlightContent[i].src);
            highText2[i].innerText = `${issues[issueNo].highlightContent[i].title}`;
            highSubText2[i].innerText = `${issues[issueNo].highlightContent[i].description}`;
        }

        const mobCaro = document.getElementById('mobCaro');
        while (mobCaro.firstChild) {
            console.log('removed');
            mobCaro.removeChild(mobCaro.firstChild);
        }

        for (let i = 0; i < issues[issueNo].cover.length; i++) {
            // Create a new div element
            const newDiv = document.createElement("div");

            // Set the class and style attributes of the div
            if (i == 0) {
                newDiv.setAttribute("class", "carousel-item active");

            } else {
                newDiv.setAttribute("class", "carousel-item");

            }

            // Add the code to the innerHTML of the div
            newDiv.innerHTML = `
  <div class="row">
    <div class="col-xs-6">
      <img class="img-fluid mx-auto"  src="img/images/issue2.png" alt="Image 1" style="width: 90vw;" id="caroMobImg"/>
      <p class="text" style="font-family: Inter;
          font-size: 24px;
          font-weight: 500;
          line-height: 40px;
          letter-spacing: 0em;
          text-align: left;margin-top: 2%;" id="caroMobText">Issue #2</p>
    </div>

  </div>
`;

            // Add the new div to the container element
            mobCaro.appendChild(newDiv);

        }

        const caroMobImg = document.querySelectorAll('#caroMobImg');
        const caroMobText = document.querySelectorAll('#caroMobText');



        for (let i = 0; i < issues[issueNo].cover.length; i++) {
            caroMobImg[i].setAttribute('src', issues[issueNo].cover[0]);
            caroMobText[i].innerText = `${issues[issueNo].title}`;
        }
        const mobileMag = document.getElementById('mobileMag');
        while (mobileMag.firstChild) {
            mobileMag.removeChild(mobileMag.firstChild);
        }
        const mobileIssueText = document.getElementById('mobileIssueText');
        const mobileIssueSubText = document.getElementById('mobileIssueSubText');

        for (let i = 0; i < issues[issueNo].cover.length; i++) {
            // Create a new div element
            const newDiv = document.createElement("button");

            // Set the class and style attributes of the div
            newDiv.setAttribute("class", "btn p-0");
            newDiv.setAttribute("id", "mag-img-m");

            // Add the code to the innerHTML of the div
            newDiv.innerHTML = `
      <div class="col" id="mag-divi-m" style=" width: 12vw; height: 12vw; border: none;
                      border-radius: 16px;background-color: #E9E5DE;padding: 20%;">
                        <img src="img/images/mag1.png" class="img-fluid" id="mag-imgas-m" alt="Your Image"
                          style="filter: drop-shadow(0px 4px 24px rgba(47, 19, 9, 0.24));"/>
                      </div>
      `;

            // Add the new div to the container element
            mobileMag.appendChild(newDiv);
        }

        const mobileMagImages = document.querySelectorAll('#mag-imgas-m');
        const mobileMag2 = document.querySelectorAll('#mag-head-m');

        magHeadM.setAttribute('src', issues[issueNo].cover[0]);
        mobileIssueText.innerText = `${issues[issueNo].title}`;
        mobileIssueSubText.innerText = `${issues[issueNo].description}`;


        for (let i = 0; i < issues[issueNo].cover.length; i++) {
            mobileMagImages[i].setAttribute('src', issues[issueNo].cover[i]);
            mobileMagImages[i].addEventListener('click', function () {
                imgNo = i;
                magHeadM.setAttribute('src', issues[issueNo].cover[i]);
            })
        }




    })
    const mobCaro = document.getElementById('mobCaro');
    while (mobCaro.firstChild) {
        mobCaro.removeChild(mobCaro.firstChild);
    }

    for (let i = 0; i < issues[issueNo].cover.length; i++) {
        // Create a new div element
        const newDiv = document.createElement("div");

        // Set the class and style attributes of the div
        if (i == 0) {
            newDiv.setAttribute("class", "carousel-item active");

        } else {
            newDiv.setAttribute("class", "carousel-item");

        }

        // Add the code to the innerHTML of the div
        newDiv.innerHTML = `
  <div class="row">
    <div class="col-xs-6 ">
      <img class="img-fluid mx-auto" src="img/images/issue2.png" alt="Image 1" style="width:90vw;" id="caroMobImg"/>
      <p class="text" style="font-family: Inter;
          font-size: 24px;
          font-weight: 500;
          line-height: 40px;
          letter-spacing: 0em;
          text-align: left;margin-top: 2%;" id="caroMobText">Issue #2</p>
    </div>

  </div>
`;

        // Add the new div to the container element
        mobCaro.appendChild(newDiv);

    }

    const caroMobImg = document.querySelectorAll('#caroMobImg');
    const caroMobText = document.querySelectorAll('#caroMobText');



    for (let i = 0; i < issues[issueNo].cover.length; i++) {
        caroMobImg[i].setAttribute('src', issues[issueNo].cover[0]);
        caroMobText[i].innerText = `${issues[issueNo].title}`;
    }


});



