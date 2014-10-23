var constants = {
    urlFormats: {
        picture: 'http://mvp.microsoft.com/private/publicprofile/photo?mvpid='
    },
    mvps: [
        { id: '9999', url: 'http://mvp.microsoft.com/en-us/mvp/Laurent%20G%C3%A9beau-9999', name: 'Gebeau', firstname: 'Laurent', category: 'Windows Expert-IT Pro', nbYears: 1, country: 'France', location: [50.2, 2.75] },
        { id: '5000584', url: 'http://mvp.microsoft.com/en-us/mvp/Bing%20Xie-5000584', name: 'Xie', firstname: 'Bing', category: 'ASP.NET/IIS', nbYears: 1, country: 'Australia', location: [-31.079696, 151.199886] },
        { id: '4025435', url: 'http://mvp.microsoft.com/en-us/mvp/Sarah%20E%20Dutkiewicz-4025435', name: 'Dutkiewicz', firstname: 'Sarah E ', category: 'Visual C#', nbYears: 1, country: 'United States', location: [40.782001, -73.831703] },
    ]
};

window.globals = {
    map: null
};

// Local methods
function composeDynamicPopup(currentMvp) {
    // TODO: change
    return '<a class="tooltip tooltip-effect-2" onclick="openProfile(\'' + currentMvp.url + '\')"  href="#"><img src="img/pin.png" alt="pin" /><span class="tooltip-content"><span class="tooltip-front"><img onclick="openProfile(\'' + currentMvp.url + '\')" src="' + constants.urlFormats.picture + currentMvp.id + '" alt="' + currentMvp.name + '"></span><span class="tooltip-back">' + currentMvp.firstname + ' ' + currentMvp.name + '<br /><span class="category">' + currentMvp.category + '</span></span></span></a>';
};

function openProfile(url) {
    var win = window.open(url, '_blank');
    win.focus();
};


$(function () {
    globals.map = new Microsoft.Maps.Map($('.map').get(0), {
        showDashboard: false,
        enableClickableLogo: false,
        enableSearchLogo: false,
        center: new Microsoft.Maps.Location(21, 0),
        zoom: 3,
        credentials: 'YOURKEY'
    });

    $.each(constants.mvps, function (idx, current) {
        var p = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(current.location[0], current.location[1]), {
            htmlContent: composeDynamicPopup(current),
            typeName: 'customPin',
            height: 27,
            width: 27,
            anchor: new Microsoft.Maps.Point(13.5, 13.5)
        });

        globals.map.entities.push(p);
    });
});