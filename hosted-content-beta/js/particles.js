/* tsParticles.load(@params); */

tsParticles.load({
    id: "tsparticles",
    options: {
    },
    url: "http://z.is-a.dev/hosted-content-beta/json/particles.json"
});

// after initialization this can be used.

/* tsParticles.setOnClickHandler(@callback); */

/* this will be fired from all particles loaded */

tsParticles.setOnClickHandler((event, particles) => {
    /* custom on click handler */
});

const particles = tsParticles.domItem(0);

particles.play();

particles.pause();