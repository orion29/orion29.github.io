/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Flood Damage Analysis",
    cardImage: "https://github.com/orion29/Satellite-Image-Segmentation-for-Flood-Damage-Analysis/raw/main/Images/pred_img.png",
    description:"UNET with Resnet-34 model for building footprint and flooded building segmentation tasks.",
   
    Githublink: "https://github.com/orion29/Satellite-Image-Segmentation-for-Flood-Damage-Analysis",
  },
  {
    title: "Brain MRI Segmentation",
    cardImage: "https://github.com/orion29/Brain-MRI/blob/main/Images/mri.png",
    description: "Segmentation model for automatic extraction of lower-grade gliomas with shape features",
    Previewlink: "",
    Githublink: "https://github.com/orion29/Brain-MRI",
  },
  {
    title: "Neural Style Transfer",
    cardImage: "https://github.com/orion29/Neural-Style-Transfer/raw/main/Images/transfer.png",
    description:
      "Deep Learing model that copies the style from the style image and apply it to the content image",
    Previewlink: "",
    Githublink: "https://github.com/orion29/Neural-Style-Transfer",
  },
  {
    title: "Spoken Language Identification",
    cardImage: "https://miro.medium.com/max/1182/1*OOTqBsjpuXyfYJVdPxWtBA.png",
    description:
      "NLP model that assigns language labels to audio files containing utterances in one of the languages ",
    Previewlink: "",
    Githublink: "https://github.com/orion29/Spoken-Language-Identification",
  },
  
  
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <p class="text">${description}</p>
            <ul class="menu-content">
              <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
