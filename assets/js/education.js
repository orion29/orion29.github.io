AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  
  
  {
    title: "Machine Learning with Python",
    cardImage: "assets/images/education-page/cog.webp",
    moocLink: "https://cognitiveclass.ai/courses/machine-learning-with-python",
  },
   {
    title: "Data Analysis Using Python",
    cardImage: "assets/images/education-page/cog.webp",
    moocLink: "https://cognitiveclass.ai/courses/data-analysis-python",
  },
  {
    title: "Deep Learning Fundamentals",
    cardImage: "assets/images/education-page/cog.webp",
    moocLink: "https://cognitiveclass.ai/courses/introduction-deep-learning",
  },
  {
    title: "Deep Learning with PyTorch",
    cardImage: "assets/images/education-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/deep-learning-pytorch--ud188",
  },
  {
    title: "Convolutional Neural Network",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/convolutional-neural-networks",
  },

  {
    title: "Sequence Models",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/nlp-sequence-models",
  },
  {
    title: "NLP with Attention",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/attention-models-in-nlp",
  },
  
  
  
  {
    title: "fastai course-v4 (2020)",
    cardImage: "assets/images/education-page/fast.jpg",
    moocLink: "https://course.fast.ai/videos",
  },
  {
    title: "CS230 Deep Learning",
    cardImage: "assets/images/education-page/stanford.jpg",
    moocLink: "https://www.youtube.com/watch?v=PySo_6S4ZAg&list=PLoROMvodv4rOABXSygHTsbvUz4G_YQhOb",
  },
  
  
  
 
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage,moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Machine Learning with Python ",
    image: "https://images.youracclaim.com/images/53caf8cc-b5e9-4424-b4a7-7b069fa13db4/Machine_Learning_with_Python.png",
    description: "Earned May 2019",
  },
  {
    title: "Data Analysis Using Python ",
    image: "https://images.youracclaim.com/size/680x680/images/ba34cb1c-4344-43f5-9685-55e2e901c0f0/Data_Analysis_using_Python.png",
    description: "Earned Jul 2019",
  },
  {
    title: "Deep Learning Essentials ",
    image: "https://images.credly.com/size/680x680/images/f4f08b45-aa38-4242-8b05-dcdac6811504/Deep_Learning_Essentials.png",
    description: "Earned Nov 2019",
  },
 
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description}) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [

  {
    heading: "Guru Gobind Singh Indraprastha University",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:"Bachelor of Technology (Electronics & Communication), (2017-2021)",
    description: "CGPA: 8.3/10",
  },
  {
    heading: "V.N.B.S.S School",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:"12th Standard, (2015-2017)",
    description: "Percentage: 90%",
  },
  {
    heading: "Greenfields School",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading:"High School, (2013-2015)",
    description: "CGPA: 10/10",
  },

  



  
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description}) =>
      (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Grades:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
