let juggler = [];
let jugglerThumbs = [];
let indegneousTribe = [];
let indegneousTribeThumbs = [];
let portoCity = [];
let portoCityThumbs = [];
let nightLover = [];
let nightLoverThumbs = [];
let sketchbook = [];
let sketchbookThumbs = [];
let others = [];
let othersThumbs = [];

for(let i = 1; i <= 5; i++) {
  let ref = i;
  if(i < 10) {
    ref="0"+i;
  }

  let link = "https://res.cloudinary.com/duwpl9hjf/image/upload/v1522928159/miguel-bettencourt-website/juggler/juggler";
  let linkThumb = "https://res.cloudinary.com/duwpl9hjf/image/upload/v1522928039/miguel-bettencourt-website/juggler/thumbnails/juggler";
  juggler.push(link + ref +".jpg")
  jugglerThumbs.push(linkThumb+ref+"-thumb.jpg")
}

for(let i = 1; i <= 6; i++) {
  let ref = i;
  if(i < 10) {
    ref="0"+i;
  }
  
  let link = "https://res.cloudinary.com/duwpl9hjf/image/upload/v1522927608/miguel-bettencourt-website/indegenous-tribe/indegenous-tribe";
  let linkThumb = "https://res.cloudinary.com/duwpl9hjf/image/upload/v1522927619/miguel-bettencourt-website/indegenous-tribe/thumbnails/indegenous-tribe";
  indegneousTribe.push(link + ref +".jpg")
  indegneousTribeThumbs.push(linkThumb+ref+"-thumb.jpg")
}

for(let i = 1; i <= 3; i++) {
  let ref = i;
  if(i < 10) {
    ref="0"+i;
  }
  
  let link = "https://res.cloudinary.com/duwpl9hjf/image/upload/v1522927542/miguel-bettencourt-website/night-lover/night-lover";
  let linkThumb = "https://res.cloudinary.com/duwpl9hjf/image/upload/v1522927556/miguel-bettencourt-website/night-lover/thumbnails/night-lover";
  nightLover.push(link + ref +".jpg")
  nightLoverThumbs.push(linkThumb+ref+"-thumb.jpg")
}

for(let i = 1; i <= 6; i++) {
  let ref = i;
  if(i < 10) {
    ref="0"+i;
  }
  
  let link = "https://res.cloudinary.com/duwpl9hjf/image/upload/v1522927449/miguel-bettencourt-website/porto-city/porto-city";
  let linkThumb = "https://res.cloudinary.com/duwpl9hjf/image/upload/v1522927461/miguel-bettencourt-website/porto-city/thumbnails/porto-city";
  portoCity.push(link + ref +".jpg")
  portoCityThumbs.push(linkThumb+ref+"-thumb.jpg")
}

for(let i = 1; i <= 7; i++) {
  let ref = i;
  if(i < 10) {
    ref="0"+i;
  }
  
  let link = "https://res.cloudinary.com/duwpl9hjf/image/upload/v1522927496/miguel-bettencourt-website/others/others";
  let linkThumb = "https://res.cloudinary.com/duwpl9hjf/image/upload/v1522927510/miguel-bettencourt-website/others/thumbnails/others";
  others.push(link + ref +".jpg")
  othersThumbs.push(linkThumb+ref+"-thumb.jpg")
}

for(let i = 1; i <= 21; i++) {
  let ref = i;
  if(i < 10) {
    ref="0"+i;
  }
  
  let link = "https://res.cloudinary.com/duwpl9hjf/image/upload/v1522927309/miguel-bettencourt-website/sketchbook/sketchbook";
  let linkThumb = "https://res.cloudinary.com/duwpl9hjf/image/upload/v1522927416/miguel-bettencourt-website/sketchbook/thumbnails/sketchbook";
  sketchbook.push(link + ref +".jpg")
  sketchbookThumbs.push(linkThumb+ref+"-thumb.jpg")
}


export default {
  juggler: [
    juggler,
    jugglerThumbs
  ],
  indegenousTribe:  [
    indegneousTribe,
    indegneousTribeThumbs
  ],
  nightLover:  [
    nightLover,
    nightLoverThumbs
  ],
  others:  [
    others,
    othersThumbs
  ],
  portoCity:  [
    portoCity,
    portoCityThumbs
  ],
  sketchbook:  [
    sketchbook,
    sketchbookThumbs
  ]
}