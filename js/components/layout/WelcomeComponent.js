export default {
    template: `
    <section class="container" id="welcomeSection">
          <div class="row">
            <div class="col-12" id="welcomeMessage">
                <h2>welcome to project<span>play</span></h2>
                <h4>Enjoyment and education. The best of both worlds.</h4>
            </div>
          </div>

          <div class="row welcomeCategory" id="welcomeSafe">
            <div class="col-12 col-md-6">
                <h2>play safe</h2>
                <h3>Safe sex is important to prevent the spreading of HIV, AIDS, and other sexually transmitted infections</h3>
                <router-link class="btn btn-outline-primary" to="/education">learn more</router-link>
            </div>
            <div class="col-12 col-md-6">
                <img src="images/graphic_people1.svg" class="center" alt="...">
                <div class="circle">.</div>
            </div>
          </div>

          <div class="row welcomeCategory" id="welcomeTest">
            <div class="col-12 col-md-6">
                <h2>play smart</h2>
                <h3>Getting tested is a really easy process that everyone should do. We'll tell you what to expect so you won't have anything to stress about.</h3>
                <router-link class="btn btn-outline-primary" to="/education">learn more</router-link>
            </div>
            <div class="col-12 col-md-6">
                <img src="images/graphic_people2.svg" class="center" alt="...">
                <div class="circle">.</div>
            </div>
          </div>

          <div class="row welcomeCategory" id="welcomeStigma">
            <div class="col-12 col-md-6">
                <h2>play fair</h2>
                <h3>There are a lot of harmful misconceptions about HIV and AIDS. We're here to give you the facts because it's time to stop the stigma.</h3>
                <router-link class="btn btn-outline-primary" to="/education">learn more</router-link>
            </div>
            <div class="col-12 col-md-6">
                <div class="circle">.</div>
            </div>
          </div>
    </section>
    `,
}