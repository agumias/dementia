const mapInfo = {
    "新北市": { "cityName": "新北市", "percentage": "18.41%", "groupCenter": 9, "location": 52, "careCenter": 3, "groupHouse": 2, "old": 2, "healthFamily": 0, "oldFamilyCenter": 2, "bedCount": 84 },
    "台北市": { "cityName": "臺北市", "percentage": "26.77%", "groupCenter": 8, "location": 37, "careCenter": 2, "groupHouse": 1, "old": 1, "healthFamily": 2, "oldFamilyCenter": 0, "bedCount": 64 },
    "桃園市": { "cityName": "桃園市", "percentage": "19.43%", "groupCenter": 4, "location": 23, "careCenter": 1, "groupHouse": 0, "old": 0, "healthFamily": 0, "oldFamilyCenter": 1, "bedCount": 0 },
    "台中市": { "cityName": "臺中市", "percentage": "17.55%", "groupCenter": 9, "location": 31, "careCenter": 0, "groupHouse": 2, "old": 0, "healthFamily": 1, "oldFamilyCenter": 0, "bedCount": 0 },
    "台南市": { "cityName": "臺南市", "percentage": "20.98%", "groupCenter": 6, "location": 40, "careCenter": 6, "groupHouse": 1, "old": 1, "healthFamily": 0, "oldFamilyCenter": 1, "bedCount": 24 },
    "高雄市": { "cityName": "高雄市", "percentage": "46.21%", "groupCenter": 9, "location": 52, "careCenter": 4, "groupHouse": 2, "old": 1, "healthFamily": 0, "oldFamilyCenter": 1, "bedCount": 18 },
    "宜蘭縣": { "cityName": "宜蘭縣", "percentage": "31.96%", "groupCenter": 2, "location": 17, "careCenter": 3, "groupHouse": 1, "old": 0, "healthFamily": 2, "oldFamilyCenter": 0, "bedCount": 0 },
    "新竹縣": { "cityName": "新竹縣", "percentage": "40.57%", "groupCenter": 3, "location": 11, "careCenter": 1, "groupHouse": 1, "old": 2, "healthFamily": 0, "oldFamilyCenter": 0, "bedCount": 0 },
    "苗栗縣": { "cityName": "苗栗縣", "percentage": "20.17%", "groupCenter": 2, "location": 5, "careCenter": 0, "groupHouse": 0, "old": 0, "healthFamily": 3, "oldFamilyCenter": 0, "bedCount": 0 },
    "彰化縣": { "cityName": "彰化縣", "percentage": "26.50%", "groupCenter": 10, "location": 29, "careCenter": 3, "groupHouse": 0, "old": 1, "healthFamily": 0, "oldFamilyCenter": 1, "bedCount": 60 },
    "南投縣": { "cityName": "南投縣", "percentage": "20.91%", "groupCenter": 3, "location": 29, "careCenter": 0, "groupHouse": 1, "old": 0, "healthFamily": 1, "oldFamilyCenter": 0, "bedCount": 0 },
    "雲林縣": { "cityName": "雲林縣", "percentage": "33.93%", "groupCenter": 5, "location": 21, "careCenter": 3, "groupHouse": 1, "old": 0, "healthFamily": 0, "oldFamilyCenter": 0, "bedCount": 0 },
    "嘉義縣": { "cityName": "嘉義縣", "percentage": "43.41%", "groupCenter": 2, "location": 29, "careCenter": 1, "groupHouse": 0, "old": 0, "healthFamily": 1, "oldFamilyCenter": 0, "bedCount": 0 },
    "屏東縣": { "cityName": "屏東縣", "percentage": "29.44%", "groupCenter": 5, "location": 36, "careCenter": 2, "groupHouse": 0, "old": 3, "healthFamily": 0, "oldFamilyCenter": 1, "bedCount": 108 },
    "台東縣": { "cityName": "臺東縣", "percentage": "28.82%", "groupCenter": 3, "location": 17, "careCenter": 0, "groupHouse": 0, "old": 0, "healthFamily": 0, "oldFamilyCenter": 0, "bedCount": 0 },
    "花蓮縣": { "cityName": "花蓮縣", "percentage": "17.13%", "groupCenter": 5, "location": 33, "careCenter": 0, "groupHouse": 1, "old": 1, "healthFamily": 0, "oldFamilyCenter": 0, "bedCount": 36 },
    "澎湖縣": { "cityName": "澎湖縣", "percentage": "23.58%", "groupCenter": 1, "location": 7, "careCenter": 0, "groupHouse": 0, "old": 0, "healthFamily": 0, "oldFamilyCenter": 0, "bedCount": 0 },
    "基隆市": { "cityName": "基隆市", "percentage": "28.00%", "groupCenter": 2, "location": 5, "careCenter": 1, "groupHouse": 1, "old": 0, "healthFamily": 0, "oldFamilyCenter": 0, "bedCount": 0 },
    "新竹市": { "cityName": "新竹市", "percentage": "29.95%", "groupCenter": 3, "location": 10, "careCenter": 0, "groupHouse": 0, "old": 0, "healthFamily": 0, "oldFamilyCenter": 0, "bedCount": 71 },
    "嘉義市": { "cityName": "嘉義市", "percentage": "16.02%", "groupCenter": 2, "location": 7, "careCenter": 1, "groupHouse": 1, "old": 1, "healthFamily": 0, "oldFamilyCenter": 0, "bedCount": 18 },
    "金門縣": { "cityName": "金門縣", "percentage": "43.20%", "groupCenter": 1, "location": 2, "careCenter": 0, "groupHouse": 0, "old": 1, "healthFamily": 0, "oldFamilyCenter": 0, "bedCount": 24 },
    "連江縣": { "cityName": "連江縣", "percentage": "29.62%", "groupCenter": 1, "location": 1, "careCenter": 0, "groupHouse": 0, "old": 0, "healthFamily": 0, "oldFamilyCenter": 0, "bedCount": 0 },
    "全國": { "groupCenter": 95, "location": 494, "careCenter": 31, "groupHouse": 15, "old": 14, "healthFamily": 10, "oldFamilyCenter": 7, "bedCount": 507 }
}


function setInfo(city) {
    let data = mapInfo[city];
    if (!data) {
        data = mapInfo["全國"];
        $("#sec5-county_Label").text("全國");
        $('#percentage').text("25.25%");
        // $('.mobile-btn-special').hide();
        // $('.normal-map-btn .col-12').hide();
        $('.normal-map-btn .col-12').removeClass("d-flex").addClass("d-none");
    } else {
        if (data['cityName'] == '新北市') {
            // $('.mobile-btn-special').show();
            $('.normal-map-btn .col-12').removeClass("d-none").addClass("d-flex");
        } else {
            // $('.mobile-btn-special').hide();
            $('.normal-map-btn .col-12').removeClass("d-flex").addClass("d-none");
        }

        $("#sec5-county_Label").text(data["cityName"]);
    }
    for (let a in data) {
        $("#" + a).text(data[a]);
    }
}

function getTooltipInfo(city) {
    let data = mapInfo[city];
    let tooltiphtml = '<div class="row"><div class="col-12 ">';

    if (!data) {
        data = mapInfo["全國"];
        tooltiphtml += '<h4 id="toolTip_Label">全國</h4> <div class="row"> <div class="col-12"> <h5 id="tooltip_percentageBlock"> 失智服務涵蓋率<span id="tooltip_percentage">25.25%</span></h3> </div></div>';
    } else {
        tooltiphtml += '<h4 id="toolTip_Label">' + data["cityName"] + '</h4> <div class="row"> <div class="col-12"> <h5 id="tooltip_percentageBlock"> 失智服務涵蓋率<span id="tooltip_percentage">' + data["percentage"] + '</span></h3> </div></div>';
    }
    tooltiphtml += '<div class="row"> <div class="col-lg-12"> <div class="row"> <div class="col-6"> 社區據點：<span id="tooltip_location">' + data["location"] + '</span>個 </div><div class="col-6"> 老福機構：<span id="tooltip_old">' + data["old"] + '</span>間 </div></div><div class="row"> <div class="col-6"> 日照中心：<span id="tooltip_careCenter">' + data["careCenter"] + '</span>間 </div> <div class="col-6"> 護理之家：<span id="tooltip_healthFamily">' + data["healthFamily"] + '</span>間 </div></div><div class="row"> <div class="col-6"> 共照中心：<span id="tooltip_groupCenter">' + data["groupCenter"] + '</span>間 </div><div class="col-6"> 榮家體系：<span id="tooltip_oldFamilyCenter">' + data["oldFamilyCenter"] + '</span>間 </div></div><div class="row"><div class="col-6"> 團體家屋：<span id="tooltip_groupHouse">' + data["groupHouse"] + '</span>間 </div><div class="col-6"> 失智床位：<span id="tooltip_bedCount">' + data["bedCount"] + '</span>床 </div></div></div></div>'
    tooltiphtml += '</div></div>';
    if (data) {
        if (data['cityName'] == '新北市') {
            tooltiphtml += '<div class="row"><div class="col-12 d-flex justify-content-center align-items-center"> <a href="https://pse.is/3kgak6" class="btn btn-light read-more-btn  d-flex justify-content-center" >縣市響應</a></div></div>';
        }
    }
    return tooltiphtml;

}




async function initMap() {

    const path = d3.geoPath();

    const width = 490;
    const height = 600;

    // const zoom = d3.zoom()
    //     .scaleExtent([1, 8])
    //     .on("zoom", zoomed);
    let isShowingTip = false;
    const svg = d3.select("#tw_map")
        .attr("viewBox", [0, 0, width, height])
        .on("click", reset);

    const g = svg.append("g");

    const us = await d3.json("https://cdn.jsdelivr.net/npm/taiwan-atlas/counties-mercator-10t.json").then(function(data) {
        return data;
    });



    const states = g.append("g")
        .attr("fill", "#ffffff")
        .attr("cursor", "pointer")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.counties).features)
        .join("path")
        .on("click", clicked)
        .attr("d", path);
    // .attr("countiesName", function(d) {
    //     return d.properties.COUNTYNAME ;
    // });

    states.append("title")
        .text(d => d.properties.name);

    g.append("path")
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("stroke-linejoin", "round")
        .attr("d", path(topojson.mesh(us, us.objects.counties, (a, b) => a !== b)));

    var tip = d3.tip().attr('class', 'd3-tip').offset(function(e, d) {
        return [g.node().getBoundingClientRect().height / 2, 0]

    }).html((EVENT, d) => {
        if (d) {
            return getTooltipInfo(d.properties.COUNTYNAME);
        } else {
            return getTooltipInfo();
        }
        return
    });
    svg.call(tip)

    // svg.call(zoom);

    function reset(e, d) {
        states.transition().style("fill", null);
        setInfo();
        if (document.documentElement.clientWidth <= 991) {

            if (isShowingTip) {
                tip.hide();
                states.transition().style("fill", null);
                isShowingTip = false;
            } else {
                tip.show(e, d, svg.node());
                isShowingTip = true;
            }
        }
    }

    function clicked(event, d) {

        const [
            [x0, y0],
            [x1, y1]
        ] = path.bounds(d);
        event.stopPropagation();
        setInfo(d.properties.COUNTYNAME);
        states.transition().style("fill", null);
        d3.select(this).transition().style("fill", "red");

        if (document.documentElement.clientWidth <= 991) {

            if (isShowingTip) {
                tip.hide();
                states.transition().style("fill", null);
                isShowingTip = false;
            } else {
                tip.show(event, d, svg.node());
                isShowingTip = true;
            }
        }
    }

    return svg.node();
}