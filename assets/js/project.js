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
    cardImage: "https://camo.githubusercontent.com/f735a7667772b74edb13c6e968391c41217c06b0/68747470733a2f2f7777772e6b6167676c6575736572636f6e74656e742e636f6d2f6b662f34353437313335332f65794a68624763694f694a6b615849694c434a6c626d4d694f694a424d54493451304a444c5568544d6a5532496e302e2e4d3938513275364d554a546e4169535f7539546275672e7662325437554d6d45732d467a4639376a53736469757a644969623945317a43386a4947454d51514b61307a55506a39495445434655427a4d794d615f5873505a5545635a4c4d496662534c4a5270614262735872726471723975377a7874712d72495249666b73352d313573375273736261326f4c41744a375a68704d486e375241363356324b34636c4b78517a4869784e51575543564b3765544835626e72585735397830754a61374d315067367831543867495130705a686136334573766c394352496e6f4f586268767549665a6f2d6e6857764b3734476e7a71562d70437938426562415a786e506a643430797a6e72665756574b59443037485f704351475a4f314a6f6a4c39536e504c654364474f4a73535834773476566654696c7865344b6c477155476556464e31595f7a58373266344a7374426c67624576684f50493367674c7050464f3470595548477862427737634b32715a3755556f6a4535624a545063374c5a7a3846706773324e3548523579646a7059755a2d445850566253465742533461434d646a3959484d37716e69672d574f53375a4a5947586f2d357869716e736f2d333364622d366b655372566777395379362d72695f4348616a636a472d5071414a487533425f6a35667969314b687975553547436638735a4a484e7a4667714146704b712d556d762d58317252616a3962415177387353523134366f6a45644c5f764f5f6178584f79717665516a6c6c434b45727a6b694334685a3278665a683759504b714b713549363970504f584c50456f5f7a55376c55625a736a587945783554376b626669456e4d4e756b6c3875527068683441594c594f31466e657a59766b4e7666524745493954377a664f555a48432e7a50526e56304e486d66395a427944435467755630512f5f5f726573756c74735f5f5f66696c65732f5f5f726573756c74735f5f5f375f312e706e67",
    description:
      "Segmentation model for automatic extraction of lower-grade gliomas with shape features",
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
