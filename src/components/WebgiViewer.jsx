// import {
//     ViewerApp,
//     AssetManagerPlugin,
//     GBufferPlugin,
//     timeout,
//     ProgressivePlugin,
//     TonemapPlugin,
//     SSRPlugin,
//     SSAOPlugin,
//     DiamondPlugin,
//     FrameFadePlugin,
//     GLTFAnimationPlugin,
//     GroundPlugin,
//     BloomPlugin,
//     TemporalAAPlugin,
//     AnisotropyPlugin,
//     GammaCorrectionPlugin,

//     addBasePlugins,
//     ITexture, TweakpaneUiPlugin, AssetManagerBasicPopupPlugin, CanvasSnipperPlugin,

//     IViewerPlugin,

//     // Color, // Import THREE.js internals
//     // Texture, // Import THREE.js internals
// } from "webgi";
import React, { useRef, useEffect, useState, useCallback, forwardRef, useImperativeHandle } from 'react'
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    mobileAndTabletCheck,
    AssetManagerBasicPopupPlugin,
    CanvasSnipperPlugin
} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clickAnimation } from '../lib/click-animation'

gsap.registerPlugin(ScrollTrigger);
const WebgiViewer = forwardRef((props, ref) => {
    const canvasRef = useRef(null);
    // references to change position of camera
    // const [viewerRef, setViewerRef] = useState(null)
    // const [targetRef, setTargetRef] = useState(null)
    // const [cameraRef, setCameraRef] = useState(null)
    // const [positionRef, setPositionRef] = useState(null)

    // useImperativeHandle(ref, () => ({
    //     triggerPreview() {
    //         gsap.to(positionRef, {
    //             x: 13.04,
    //             y: -2.01,
    //             z: 2.29,
    //             duration: 2,
    //             onUpdate: () => {
    //                 viewerRef.setDirty()
    //                 cameraRef.positionTargetUpdated(true)
    //             }
    //         });

    //         gsap.to(targetRef, { x: 0.11, y: 0.0, z: 0.0, duration: 2 })
    //     }
    // }))

    // do not want re-render and recreate this animation function on every render
    // const memoizedclickAnimation = useCallback((position, target, onUpdate) => {
    //     if (position && target && onUpdate) {
    //         clickAnimation(position, target, onUpdate);
    //     }
    // }, [])

    const setupViewer = useCallback(async () => {
        // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
            useGBufferDepth: true
        })

        const options = {
            autoScale: true, // Scales the object before adding to the scene.
            autoScaleRadius: 7, // Scales the object bounding box to 2 World Units, if autoScale is true
            pseudoCenter: true, // centers the object to origin on load
            // check docs for other options (if required) 
        }

        // setViewerRef(viewer)

        // Add some plugins
        const manager = await viewer.addPlugin(AssetManagerPlugin)

        // this could access position and target
        // const camera = viewer.scene.activeCamera;
        // modifies and animates 3D model
        // const position = camera.position
        // const target = camera.target

        // setCameraRef(camera)
        // setPositionRef(position)
        // setTargetRef(target)

        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        // might disable transparency
        // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
        // await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        // await viewer.addPlugin(DiamondPlugin)
        // await viewer.addPlugin(FrameFadePlugin)
        // await viewer.addPlugin(GLTFAnimationPlugin)
        // await viewer.addPlugin(GroundPlugin)
        await viewer.addPlugin(BloomPlugin)
        // await viewer.addPlugin(TemporalAAPlugin)
        // await viewer.addPlugin(AnisotropyPlugin)
        // and many more...

        // or use this to add all main ones at once.
        // await addBasePlugins(viewer)

        // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
        await viewer.addPlugin(CanvasSnipperPlugin)

        // This must be called once after all plugins are added.
        viewer.renderer.refreshPipeline()

        // Import and add a GLB file.
        await Promise.all([
            viewer.scene.setEnvironment(await manager.importer.importSingle({ path: 'https://demo-assets.pixotronics.com/pixo/hdr/p360' })),
            manager.addFromPath("bmw_m3_e30_1986.glb", options)
        ])

        // manipulating background of glb file which is 3D model
        viewer.getPlugin(TonemapPlugin).uiConfig.type = true

        // This disables the controls to rotate the 3D model
        // Remember to keep this on for the car application
        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: true });

        // makes sure the position of page is on the top
        // window.scrollTo(0, 0);

        // only want to update this on certain positions
        let needsUpdate = false

        // camera and viewer needs to be updated
        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty()
        }

        // this event listener updates position of camera
        // viewer.addEventListener("preFrame", () => {
        //     if (needsUpdate) {
        //         // camera.positionTargetUpdated(true)
        //         needsUpdate = false;
        //     }
        // })

        // memoizedclickAnimation(position, target, onUpdate)
    }, [])

    useEffect(() => {
        setupViewer()
    }, []);

    return (
        <div id='webgi-canvas-container'>
            <canvas id="webgi-canvas" ref={canvasRef} />
        </div>
    )
})

export default WebgiViewer
// Load an environment map if not set in the glb file
// await viewer.setEnvironmentMap((await manager.importer!.importSinglePath<ITexture>("./assets/environment.hdr"))!);

// Add some UI for tweak and testing.
// const uiPlugin = await viewer.addPlugin(TweakpaneUiPlugin)
// Add plugins to the UI to see their settings.
// uiPlugin.setupPlugins < IViewerPlugin > (TonemapPlugin, CanvasSnipperPlugin)