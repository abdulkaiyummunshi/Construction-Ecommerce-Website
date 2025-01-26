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

let summeryOne = document.querySelector(".one");
let summeryTow = document.querySelector(".tow");
let summeryThree = document.querySelector(".three");
let bodyOne = document.querySelector(".body_one");
let bodyTow = document.querySelector(".body_tow");
let bodyThree = document.querySelector(".body_three");

summeryOne.addEventListener("click", function () {
    bodyTow.classList.remove("body_tow_active");
    bodyOne.classList.remove("body_one_remove");
    bodyThree.classList.remove("body_three_active");
    summeryOne.classList.remove("name_remove_bg"); //one is active
    summeryTow.classList.remove("name_add_bg"); //tow is remove
    summeryThree.classList.remove("name_add_bg"); //three is remove
});
summeryTow.addEventListener("click", function () {
    bodyTow.classList.add("body_tow_active");
    bodyOne.classList.add("body_one_remove");
    bodyThree.classList.remove("body_three_active");
    summeryTow.classList.add("name_add_bg"); //tow is add
    summeryOne.classList.add("name_remove_bg"); //one is remove
    summeryThree.classList.remove("name_add_bg"); //three is remove
});
summeryThree.addEventListener("click", function () {
    bodyTow.classList.remove("body_tow_active");
    bodyOne.classList.add("body_one_remove");
    bodyThree.classList.add("body_three_active");
    summeryThree.classList.add("name_add_bg");  //three is active
    summeryOne.classList.add("name_remove_bg"); //one is remoe
    summeryTow.classList.remove("name_add_bg"); //tow is remove

});