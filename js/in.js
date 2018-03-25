let moment = require('moment');
moment().format();

// catching two selects
let selectYear = document.getElementById('year');
let selectMonth = document.getElementById('month');
let currentMonths = document.getElementsByClassName('currentMonths')
let finalChart = document.querySelector('.finalChart')

// DATES USED FOR FETCH & AJAX REQUESTS via global variables
let year;
let mStart;
let mEnd;
let time;
let howManyMonths = Number(moment('2018', 'YYYY').startOf('month').fromNow()[0]);
//Creating another global variables
let ccyTable = [];
let datesTable = [];


//catching year selected with listener 'year first rule'
selectYear.addEventListener('change', function () {
    year = Number(this.value);
    if (selectYear.value != 'default') {
        selectMonth.classList.remove('none');
    }
});

// adding rule of displaying only passed months of 2018
selectYear.addEventListener('change', function () {
    if (selectYear.value == '2018') {
        for (let i = (currentMonths.length - 1); i >= (howManyMonths - 1); i--) {
            currentMonths[i].classList.add('none');
        }
    }
    else {
        for (let i = 0; i < currentMonths.length; i++) {
            currentMonths[i].classList.remove('none');
        }
    }
});

//catching and mapping months selected
selectMonth.addEventListener('change', function () {
    switch (selectMonth.value) {
        case 'January':
            mStart = `${year}-01-01`;
            mEnd = moment(`${year}01`, 'YYYYMM').endOf('month').format('YYYY-MM-DD');
            time = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${mStart}/${mEnd}/`
            console.warn(`Okres od ${mStart} do ${mEnd} `)
            loadMucho();
            break;
        case 'February':
            mStart = `${year}-02-01`;
            mEnd = moment(`${year}02`, 'YYYYMM').endOf('month').format('YYYY-MM-DD');
            console.warn(`Okres od ${mStart} do ${mEnd} `)
            time = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${mStart}/${mEnd}/`
            loadMucho();
            break;
        case 'March':
            mStart = `${year}-03-01`;
            mEnd = moment(`${year}03`, 'YYYYMM').endOf('month').format('YYYY-MM-DD');
            console.warn(`Okres od ${mStart} do ${mEnd} `)
            time = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${mStart}/${mEnd}/`
            loadMucho();
            break;
        case 'April':
            mStart = `${year}-04-01`;
            mEnd = moment(`${year}04`, 'YYYYMM').endOf('month').format('YYYY-MM-DD');
            console.warn(`Okres od ${mStart} do ${mEnd} `)
            time = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${mStart}/${mEnd}/`
            loadMucho();
            break;
        case 'May':
            mStart = `${year}-05-01`;
            mEnd = moment(`${year}05`, 'YYYYMM').endOf('month').format('YYYY-MM-DD');
            console.warn(`Okres od ${mStart} do ${mEnd} `)
            time = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${mStart}/${mEnd}/`
            loadMucho();
            break;
        case 'June':
            mStart = `${year}-06-01`;
            mEnd = moment(`${year}06`, 'YYYYMM').endOf('month').format('YYYY-MM-DD');
            console.warn(`Okres od ${mStart} do ${mEnd} `)
            time = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${mStart}/${mEnd}/`
            loadMucho();
            break;
        case 'July':
            mStart = `${year}-07-01`;
            mEnd = moment(`${year}07`, 'YYYYMM').endOf('month').format('YYYY-MM-DD');
            console.warn(`Okres od ${mStart} do ${mEnd} `)
            time = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${mStart}/${mEnd}/`
            loadMucho();
            break;
        case 'August':
            mStart = `${year}-08-01`;
            mEnd = moment(`${year}08`, 'YYYYMM').endOf('month').format('YYYY-MM-DD');
            console.warn(`Okres od ${mStart} do ${mEnd} `)
            time = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${mStart}/${mEnd}/`
            loadMucho();
            break;
        case 'September':
            mStart = `${year}-09-01`;
            mEnd = moment(`${year}09`, 'YYYYMM').endOf('month').format('YYYY-MM-DD');
            console.warn(`Okres od ${mStart} do ${mEnd} `)
            time = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${mStart}/${mEnd}/`
            loadMucho();
            break;
        case 'October':
            mStart = `${year}-10-01`;
            mEnd = moment(`${year}10`, 'YYYYMM').endOf('month').format('YYYY-MM-DD');
            console.warn(`Okres od ${mStart} do ${mEnd} `)
            time = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${mStart}/${mEnd}/`
            loadMucho();
            break;
        case 'November':
            mStart = `${year}-11-01`;
            mEnd = moment(`${year}11`, 'YYYYMM').endOf('month').format('YYYY-MM-DD');
            console.warn(`Okres od ${mStart} do ${mEnd} `)
            time = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${mStart}/${mEnd}/`
            loadMucho();
            break;
        case 'December':
            mStart = `${year}-12-01`;
            mEnd = moment(`${year}12`, 'YYYYMM').endOf('month').format('YYYY-MM-DD');
            console.warn(`Okres od ${mStart} do ${mEnd} `)
            time = `http://api.nbp.pl/api/exchangerates/rates/a/usd/${mStart}/${mEnd}/`
            loadMucho();
            break;
    }
});


let loadMucho = () => {
    fetch(time)
        .then(response => {
            console.log(response);
            return response.json()
                .then(finalToArray => {
                    let array = finalToArray.rates;
                    datesTable = [];
                    finalChart.innerHTML = '';
                    array.forEach(element => ccyTable.push(element.mid));
                    array.forEach(element => datesTable.push(element.effectiveDate));
                    return finalToArray
                })
                .then(final => {
                    let height = 400;
                    let width = 768;
                    let barWidth = 32;
                    let barMargin = 5;

                    // tworzymy div bedacy naszym tooltipem
                    let tooltip = d3.select('body').append('div')
                        .classed('tooltip', true)



                    d3.select('body').select('.finalChart').append('svg')
                        .attr('width', width)
                        .attr('height', height)
                        .classed('barz', true)
                        .selectAll('rect')
                        .data(final.rates)
                        .enter()
                        .append('rect')
                        .style('fill', '#DED2BB')
                        .classed('ccyBars', true)
                        .attr('width', barWidth)
                        .attr('height', function (h) {
                            return Number(h.mid) * 80
                        })
                        .attr('x', function (x, i) {
                            return i * (barWidth + barMargin)
                        })
                        .attr('y', function (y) {
                            return height - (Number(y.mid) * 80)
                        })



                        // tooltip
                        .on('mousemove', function (data) {

                            tooltip.transition()
                                .style('opacity', 1)
                            tooltip.html(`<h2>${data.mid.toFixed(2)+'  USD/PLN'}</h2>`+
                                `<h1>${data.effectiveDate}</h1>`+
                                `<h2>${moment(`${data.effectiveDate}`,`YYYY-MM-DD`).format('dddd')}</h2>`
                            )
                                .style('left', (d3.event.pageX) + 'px')
                                .style('top', (d3.event.pageY + 20) + 'px')
                                .style("visibility", "visible")
                            d3.select(this).style('opacity', 0.5)
                        })
                        .on('mouseleave', function () {
                            d3.select(this).style('opacity', 1);
                            tooltip.style('visibility','hidden')
                        })


                    let heightAnimation = new TimelineMax();
                        heightAnimation.staggerFrom(document.querySelectorAll('.ccyBars'), 1, {
                        attr: {
                            height: 0,
                            y: 400
                        }
                    }, 0.05);


                    return final
                })
                .catch(err => {
                    console.log('Błąd!', err);
                });
        })
}



