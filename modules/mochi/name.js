const adjustName = async () => {

    const names = ["Economics","Commerce P1","Commerce P2","Business Planning P1","Business Planning P2","Marketing","Advertisement","Negotiations","Contracts P1","Contracts P2","Sales & Production","Finance P1","Finance P2","Banking","Investments P1","Investments P2","Accounting","Taxes & Policies","Billing & Expenses","Organizations P1","Organizations P2","Products P1","Products P2","Operation","Industry","Construction","Office Procedures","Management","Meetings & Conferences P1","Meetings & Conferences P2","Office Technology P1","Office Technology P2","Communication","Correspondence & Documents","Common Words P1","Common Words P2","Multiple-meaning words P1","Multiple-meaning words P2","Ordering & Shipping","Shopping","Customer Services P1","Customer Services P2","Warranties","Inventory","Recruiting & Applying P1","Recruiting & Applying P2","Employee Training","Salaries & Benefits P1","Salaries & Benefits P2","Promotions & Recognition","Workplace P1","Workplace P2","Career P1","Career P2","Society P1","Society P2","Social Issues","Environment & Nature P1","Environment & Nature P2","Airlines","Transportation","Science","Education & Schooling P1","Education & Schooling P2","Agriculture","Security","Arts","Museums","Movies","Music","Entertainment","Events","Media","Traveling P1","Traveling P2","Hotels","Household","Cooking P1","Cooking P2","Restaurants","Healthcare P1","Healthcare P2","Hospitals P1","Hospitals P2","Clinics","Pharmacies","Insurance","Common Phrases P1","Common Phrases P2","Transition Words"]

    document.querySelectorAll('.level-name').forEach((el, index) => {
        setTimeout(() => {

            el.click()

            setTimeout(() => {
                el.querySelector('input').value = names[index]
            }, 300)

        }, 500 * index)
    })
}

adjustName()
