import React from 'react'

function About() {
  const spacing = 1; // You can set your desired spacing value here
const styleObject = { marginRight: spacing + 'em' };
  return (
    <div>
    <div class="card mb-3" style={styleObject}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={require('../About/itworkers.jpg')} class="img-fluid rounded-start itworkersimg" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
        <p class="card-text">
<ul>
  <li>
    <b> Introduction:</b><br/>
    <p>Start with a welcoming and concise introduction. Describe your IT company's primary focus and what sets you apart from the competition. Highlight your commitment to innovation and technology.</p>
  </li>
  <li>
    <b>Our Mission and Vision:</b><br/>
    <p>Share your company's mission and vision. Explain the problems you aim to solve or the value you aim to provide through your IT solutions. Express your dedication to using technology to make a positive impact.</p>
  </li>

  <li>
    <b>Formatting:</b><br/>
    <p>Format the text, use headings, and add images as needed to make the content visually appealing and easy to read. You can format the text using HTML, CSS, or the built-in tools in your CMS.</p>
  </li>

  <li>
    <b>Design and Layout:</b><br/>
    <p>Ensure that the design and layout of the "About Us" page are consistent with the overall style and branding of your website. Use CSS to style the page elements as desired.</p>
  </li>
</ul>

        </p>
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
       </div>


  </div>
</div>
    </div>
  )
}

export default About