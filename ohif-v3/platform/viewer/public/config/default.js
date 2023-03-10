window.config = {
    routerBasename: '/',
    whiteLabeling: { // 自定义系统Logo
        createLogoComponentFn: function (React) {
            return React.createElement('a', {
                target: '_self',
                rel: 'noopener noreferrer',
                className: 'header-brand',
                href: '/',
                style: {
                    display: 'block',
                    textIndent: '-9999px',
                    background: 'url(../assets/Kp_Logo.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: '200px',
                },
            }, "Kp_Logo");
        },
    },
    extensions: [],
    modes: [],
    customizationService: {
        // Shows a custom route -access via http://localhost:3000/custom
        // helloPage: '@ohif/extension-default.customizationModule.helloPage',
    },
    showStudyList: true,
    maxNumberOfWebWorkers: 4,

    // below flag is setted to true for performance reasons, but it might not work for all servers
    // default value is false
    omitQuotationForMultipartRequest: false,
    showLoadingIndicator: true,
    maxNumRequests: {
        interaction: 100,
        thumbnail: 75,
        prefetch: 10,
    },
    // filterQueryParam: false,
    dataSources: [
        {
            friendlyName: 'dcmjs DICOMWeb Server',
            namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
            sourceName: 'dicomweb',
            configuration: {
                name: 'aws',
                // old server
                wadoUriRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado',
                qidoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
                wadoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
                // new server
                //wadoUriRoot: 'http://localhost:44301/api',
                //qidoRoot: 'http://localhost:44301/api',
                //wadoRoot: 'http://localhost:44301/api',
                qidoSupportsIncludeField: false,
                supportsReject: false,
                imageRendering: 'wadors',
                thumbnailRendering: 'wadors',
                enableStudyLazyLoad: true,
                supportsFuzzyMatching: true,
                supportsWildcard: true,
                staticWado: true,
                singlepart: 'bulkdata,video,pdf',
            },
        },
        {
            friendlyName: 'dicom json',
            namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
            sourceName: 'dicomjson',
            configuration: {
                name: 'json',
            },
        },
        {
            friendlyName: 'dicom local',
            namespace: '@ohif/extension-default.dataSourcesModule.dicomlocal',
            sourceName: 'dicomlocal',
            configuration: {},
        },
    ],
    httpErrorHandler: error => {
        // This is 429 when rejected from the public idc sandbox too often.
        console.warn(error.status);

        // Could use services manager here to bring up a dialog/modal if needed.
        console.warn('test, navigate to https://ohif.org/');
    },
    // whiteLabeling: {
    //   /* Optional: Should return a React component to be rendered in the "Logo" section of the application's Top Navigation bar */
    //   createLogoComponentFn: function (React) {
    //     return React.createElement(
    //       'a',
    //       {
    //         target: '_self',
    //         rel: 'noopener noreferrer',
    //         className: 'text-purple-600 line-through',
    //         href: '/',
    //       },
    //       React.createElement('img',
    //         {
    //           src: './customLogo.svg',
    //           className: 'w-8 h-8',
    //         }
    //       ))
    //   },
    // },
    defaultDataSourceName: 'dicomweb',
    hotkeys: [
        {
            commandName: 'incrementActiveViewport',
            label: 'Next Viewport',
            keys: ['right'],
        },
        {
            commandName: 'decrementActiveViewport',
            label: 'Previous Viewport',
            keys: ['left'],
        },
        { commandName: 'rotateViewportCW', label: 'Rotate Right', keys: ['r'] },
        { commandName: 'rotateViewportCCW', label: 'Rotate Left', keys: ['l'] },
        { commandName: 'invertViewport', label: 'Invert', keys: ['i'] },
        {
            commandName: 'flipViewportHorizontal',
            label: 'Flip Horizontally',
            keys: ['h'],
        },
        {
            commandName: 'flipViewportVertical',
            label: 'Flip Vertically',
            keys: ['v'],
        },
        { commandName: 'scaleUpViewport', label: 'Zoom In', keys: ['+'] },
        { commandName: 'scaleDownViewport', label: 'Zoom Out', keys: ['-'] },
        { commandName: 'fitViewportToWindow', label: 'Zoom to Fit', keys: ['='] },
        { commandName: 'resetViewport', label: 'Reset', keys: ['space'] },
        { commandName: 'nextImage', label: 'Next Image', keys: ['down'] },
        { commandName: 'previousImage', label: 'Previous Image', keys: ['up'] },
        // {
        //   commandName: 'previousViewportDisplaySet',
        //   label: 'Previous Series',
        //   keys: ['pagedown'],
        // },
        // {
        //   commandName: 'nextViewportDisplaySet',
        //   label: 'Next Series',
        //   keys: ['pageup'],
        // },
        {
            commandName: 'setToolActive',
            commandOptions: { toolName: 'Zoom' },
            label: 'Zoom',
            keys: ['z'],
        },
        // ~ Window level presets
        {
            commandName: 'windowLevelPreset1',
            label: 'W/L Preset 1',
            keys: ['1'],
        },
        {
            commandName: 'windowLevelPreset2',
            label: 'W/L Preset 2',
            keys: ['2'],
        },
        {
            commandName: 'windowLevelPreset3',
            label: 'W/L Preset 3',
            keys: ['3'],
        },
        {
            commandName: 'windowLevelPreset4',
            label: 'W/L Preset 4',
            keys: ['4'],
        },
        {
            commandName: 'windowLevelPreset5',
            label: 'W/L Preset 5',
            keys: ['5'],
        },
        {
            commandName: 'windowLevelPreset6',
            label: 'W/L Preset 6',
            keys: ['6'],
        },
        {
            commandName: 'windowLevelPreset7',
            label: 'W/L Preset 7',
            keys: ['7'],
        },
        {
            commandName: 'windowLevelPreset8',
            label: 'W/L Preset 8',
            keys: ['8'],
        },
        {
            commandName: 'windowLevelPreset9',
            label: 'W/L Preset 9',
            keys: ['9'],
        },
    ],
};
