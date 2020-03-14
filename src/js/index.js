import '../styles/styles.scss';

const langToggler = document.getElementById('langToggler')
const langList = document.getElementById('langList')

langToggler.addEventListener('click', () => {
    if (langList.style.display != 'none') {
        langList.style.display = 'none'
    } else {
        langList.style.display = 'block'
    }
}) 

const importTab = document.getElementById('importTab')
const exportTab = document.getElementById('exportTab')
const importTabContent = document.getElementById('importTabContent')
const exportTabContent = document.getElementById('exportTabContent')
const underline = document.getElementById('underline')

importTab.addEventListener('click', (event) => {
    event.preventDefault()

    if (!importTabContent.classList.contains('tab-active')) {
        importTabContent.classList.add('tab-active')
        exportTabContent.classList.remove('tab-active')
        underline.style.marginLeft = '0'
    }
})

exportTab.addEventListener('click', (event) => {
    event.preventDefault()

    if (!exportTabContent.classList.contains('tab-active')) {
        exportTabContent.classList.add('tab-active')
        importTabContent.classList.remove('tab-active')
        underline.style.marginLeft = '50%'
    }
})

const threeMonthTab = document.getElementById('threeMonthTab')
const sixMonthTab = document.getElementById('sixMonthTab')
const twelveMonthTab = document.getElementById('twelveMonthTab')

const threeMonthContent = document.getElementById('threeMonthContent')
const sixMonthContent = document.getElementById('sixMonthContent')
const twelveMonthContent = document.getElementById('twelveMonthContent')

const pricingUnderline = document.getElementById('pricingUnderline')

threeMonthTab.addEventListener('click', (event) => {
    event.preventDefault()

    if (!threeMonthContent.classList.contains('tab-active')) {
        threeMonthContent.classList.add('tab-active')
        sixMonthContent.classList.remove('tab-active')
        twelveMonthContent.classList.remove('tab-active')
        pricingUnderline.style.marginLeft = '0'
    }

})

sixMonthTab.addEventListener('click', (event) => {
    event.preventDefault()

    if (!sixMonthContent.classList.contains('tab-active')) {
        sixMonthContent.classList.add('tab-active')
        threeMonthContent.classList.remove('tab-active')
        twelveMonthContent.classList.remove('tab-active')
        pricingUnderline.style.marginLeft = '33.3%'
    }

})

twelveMonthTab.addEventListener('click', (event) => {
    event.preventDefault()

    if (!twelveMonthContent.classList.contains('tab-active')) {
        twelveMonthContent.classList.add('tab-active')
        threeMonthContent.classList.remove('tab-active')
        sixMonthContent.classList.remove('tab-active')
        pricingUnderline.style.marginLeft = '66.6%'
    }

})

