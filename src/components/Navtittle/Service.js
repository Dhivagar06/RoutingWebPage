import React from 'react'
import './service.css'
function Service() {
  return (
    <div className='service'>

<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100 cardwidth">
      <img src={require('../img/videoediting.jpg')} class="card-img-top serviceimgs" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Video Edit</h5>
        <p class="card-text"> Video editing services employ experienced editors who can enhance the overall quality of your video content. They can correct color, adjust lighting, and improve audio to make your videos look and sound more professional.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 cardwidth">
      <img src={require('../img/logodesign.jpg')} class="card-img-top serviceimgs" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Log Degin</h5>
        <p class="card-text"> A logo is often the first point of contact between a business or organization and its target audience. It's a visual representation of the brand that communicates its values, personality, and purpose. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 cardwidth">
      <img src={require('../img/androiddeveloper.jpg')} class="card-img-top serviceimgs" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Android Developer</h5>
        <p class="card-text">You design, code, and maintain Android applications, ranging from small utility apps to complex, feature-rich applications.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 cardwidth">
      <img src={require('../img/webdesign.jpg')}  class="card-img-top serviceimgs" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Web Design</h5>
        <p class="card-text">A well-designed website is often the first point of contact between a business and its potential customers. It can leave a positive and memorable first impression, drawing visitors in and encouraging them to explore further.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 cardwidth">
      <img src={require('../img/bannerdesign.jpg')}  class="card-img-top serviceimgs" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Banner Design</h5>
        <p class="card-text">Banner designs are visually striking and can quickly grab the viewer's attention. They use bold colors, images, and typography to create a memorable and eye-catching presence.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 cardwidth">
      <img src={require('../img/productphoto.jpg')}  class="card-img-top serviceimgs" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Product PhotoShoot</h5>
        <p class="card-text">High-quality product photos are visually appealing and can make products look more enticing to potential customers. A well-executed photoshoot can highlight the product's features, design, and quality.</p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Service