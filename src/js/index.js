import '../styles/styles.scss';

// lang dropdown
const langToggler = document.getElementById('langToggler')
const langList = document.getElementById('langList')

langToggler.addEventListener('click', () => {
    if (langList.classList.contains('list-open')) {
        langList.classList.remove('list-open')
    } else {
        langList.classList.add('list-open')
    }
})

// other links hidden in mobile view
const otherLinks = document.getElementById('otherLinks')
const otherList = document.getElementById('otherList')

otherLinks.addEventListener('click', (event) => {
    event.preventDefault()

    if (otherList.classList.contains('list-open')) {
        otherList.classList.remove('list-open')
    } else {
        otherList.classList.add('list-open')
    }
})

// import-export tabs
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

// pricing tabs
const threeMonthTab = document.getElementById('threeMonthTab')
const sixMonthTab = document.getElementById('sixMonthTab')
const twelveMonthTab = document.getElementById('twelveMonthTab')

const threeMonthPrice = document.getElementById('threeMonthPrice')
const sixMonthPrice = document.getElementById('sixMonthPrice')
const twelveMonthPrice = document.getElementById('twelveMonthPrice')

const pricingUnderline = document.getElementById('pricingUnderline')

threeMonthTab.addEventListener('click', (event) => {
    event.preventDefault()

    if (!threeMonthPrice.classList.contains('tab-active')) {
        threeMonthPrice.classList.add('tab-active')
        sixMonthPrice.classList.remove('tab-active')
        twelveMonthPrice.classList.remove('tab-active')
        pricingUnderline.style.marginLeft = '0'
    }

})

sixMonthTab.addEventListener('click', (event) => {
    event.preventDefault()

    if (!sixMonthPrice.classList.contains('tab-active')) {
        sixMonthPrice.classList.add('tab-active')
        threeMonthPrice.classList.remove('tab-active')
        twelveMonthPrice.classList.remove('tab-active')
        pricingUnderline.style.marginLeft = '33.3%'
    }

})

twelveMonthTab.addEventListener('click', (event) => {
    event.preventDefault()

    if (!twelveMonthPrice.classList.contains('tab-active')) {
        twelveMonthPrice.classList.add('tab-active')
        threeMonthPrice.classList.remove('tab-active')
        sixMonthPrice.classList.remove('tab-active')
        pricingUnderline.style.marginLeft = '66.6%'
    }

})
