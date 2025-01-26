// -------------------PRICING SECTION START-----------------
let monthlyPlan = document.querySelector("#monthly");
let yearlyPlan = document.querySelector("#yearly");
let yearlyPlanSection = document.querySelector("#yearly_section")
let monthlyPlanSection = document.querySelector("#monthly_section")

yearlyPlan.addEventListener("click", function () {
    monthlyPlan.classList.add("monthly_active");
    yearlyPlan.classList.add("yearly_active");
    yearlyPlanSection.classList.add("tk");
    monthlyPlanSection.classList.add("monthly_dic")
});

monthlyPlan.addEventListener("click", function () {
    monthlyPlan.classList.remove("monthly_active");
    yearlyPlan.classList.remove("yearly_active");
    yearlyPlanSection.classList.remove("tk");
    monthlyPlanSection.classList.remove("monthly_dic")
});


// -------------------PRICING SECTION END-----------------

