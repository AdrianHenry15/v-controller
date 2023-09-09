import gsap from 'gsap'

export const clickAnimation = (position, target, onUpdate) => {
    // tl = timeline
    const tl = gsap.timeline();

    // two args which is what we want to animate
    // changes position of 3d model
    tl.to(position, {
        x: -3.38,
        y: -10.74,
        z: -5.93,
        // this triggers animation
        scrollTrigger: {
            trigger: '.sound-section', // className from SoundSection component
            start: "top bottom", // this is the next section of the tutorial
            end: "top top",
            scrub: 2, // 3d model will be changing its position from start to end, numbers add a little bit of delay
            immediateRender: false, // helps performance, this prevents the scroll from rendering until it is triggered
        },
        onUpdate
    })
        // the changed position from ^ function, ends at this position
        .to(target, {
            x: 1.52,
            y: 0.77,
            z: -1.08,
            // this triggers animation
            scrollTrigger: {
                trigger: '.sound-section', // className from SoundSection component
                start: "top bottom", // this is the next section of the tutorial
                end: "top top",
                scrub: 2, // 3d model will be changing its position from start to end, numbers add a little bit of delay
                immediateRender: false, // helps performance, this prevents the scroll from rendering until it is triggered
            },
        })
        .to('.jumbotron-section', {
            opacity: 0,
            // this triggers animation
            scrollTrigger: {
                trigger: '.sound-section', // className from SoundSection component
                start: "top bottom", // this is the next section of the tutorial
                end: "top top",
                scrub: 2, // 3d model will be changing its position from start to end, numbers add a little bit of delay
                immediateRender: false, // helps performance, this prevents the scroll from rendering until it is triggered
            },
        })
        // fade in for 3d model
        .to('.sound-section-content', {
            opacity: 1,
            // this triggers animation
            scrollTrigger: {
                trigger: '.sound-section', // className from SoundSection component
                start: "top bottom", // this is the next section of the tutorial
                end: "top top",
                scrub: 2, // 3d model will be changing its position from start to end, numbers add a little bit of delay
                immediateRender: false, // helps performance, this prevents the scroll from rendering until it is triggered
            },
        })
        .to(position, {
            x: 1.56,
            y: 5.0,
            z: 0.01,
            // this triggers animation
            scrollTrigger: {
                trigger: '.display-section', // className from SoundSection component
                start: "top bottom", // this is the next section of the tutorial
                end: "top top",
                scrub: 2, // 3d model will be changing its position from start to end, numbers add a little bit of delay
                immediateRender: false, // helps performance, this prevents the scroll from rendering until it is triggered
            },
            onUpdate
        })
        .to(target, {
            x: -0.55,
            y: 0.32,
            z: 0.0,
            // this triggers animation
            scrollTrigger: {
                trigger: '.display-section', // className from SoundSection component
                start: "top bottom", // this is the next section of the tutorial
                end: "top top",
                scrub: 2, // 3d model will be changing its position from start to end, numbers add a little bit of delay
                immediateRender: false, // helps performance, this prevents the scroll from rendering until it is triggered
            },
        })
        .to('.display-section', {
            opacity: 1,
            // this triggers animation
            scrollTrigger: {
                trigger: '.display-section', // className from SoundSection component
                start: "top bottom", // this is the next section of the tutorial
                end: "top top",
                scrub: 2, // 3d model will be changing its position from start to end, numbers add a little bit of delay
                immediateRender: false, // helps performance, this prevents the scroll from rendering until it is triggered
            },
        })
}