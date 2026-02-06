// Tab Switching Logic
const tabBtns = document.querySelectorAll('.tab-btn');
const calcContents = document.querySelectorAll('.calc-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        tabBtns.forEach(b => b.classList.remove('active'));
        calcContents.forEach(c => c.classList.remove('active'));

        // Add active to clicked
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// UI Helper: Show/Hide Hip input for female in Body Fat calculator
const fatGenderInputs = document.querySelectorAll('input[name="f-gender"]');
const hipGroup = document.getElementById('hip-group');

if (fatGenderInputs.length > 0) {
    fatGenderInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            if (e.target.value === 'female') {
                hipGroup.classList.remove('hidden');
                document.getElementById('f-hip').setAttribute('required', 'true');
            } else {
                hipGroup.classList.add('hidden');
                document.getElementById('f-hip').removeAttribute('required');
            }
        });
    });
}

// --- Data: Diet Plans (Enhanced with Calories & Alternatives) ---
const dietPlans = {
    1500: {
        title: "نظام 1500 سعرة حرارية (تنشيف / خسارة وزن)",
        days: [
            {
                day: "اليوم الأول",
                meals: [
                    { name: "الإفطار", desc: "2 بيضة مسلوقة + شريحة توست بني + خيار", cal: 280, alt: "4 ملاعق فول بدون زيت + 1/4 رغيف أسمر" },
                    { name: "الغداء", desc: "150 جم صدور دجاج مشوية + سلطة خضراء + 5 ملاعق أرز", cal: 450, alt: "علبة تونة مصفاة + سلطة + بطاطس صغيرة مسلوقة" },
                    { name: "العشاء", desc: "علبة تونة مصفاة + سلطة", cal: 200, alt: "جبنة قريش (100جم) + سلطة" },
                    { name: "سناك", desc: "تفاحة متوسطة", cal: 60, alt: "برتقالة" }
                ]
            },
            {
                day: "اليوم الثاني",
                meals: [
                    { name: "الإفطار", desc: "4 ملاعق شوفان بالحليب خالي الدسم + موزة", cal: 320, alt: "2 بيضة مقلية (رذاذ زيت) + توست" },
                    { name: "الغداء", desc: "قطعة لحم (100 جم) مسلوقة + خضار سوتيه", cal: 400, alt: "سمكة مشوية + 4 ملاعق أرز" },
                    { name: "العشاء", desc: "جبنة قريش (150 جم) + خيار وطماطم", cal: 180, alt: "زبادي يوناني سادة" },
                    { name: "سناك", desc: "حفنة لوز (10 حبات)", cal: 70, alt: "10 حبات فول سوداني" }
                ]
            },
            {
                day: "اليوم الثالث",
                meals: [
                    { name: "الإفطار", desc: "أومليت (2 بيضة) بالخضار + نصف رغيف سن", cal: 300, alt: "2 شريحة جبن رومي + توست بني" },
                    { name: "الغداء", desc: "علبة تونة + طبق سلطة كبير + بطاطس مسلوقة صغيرة", cal: 350, alt: "صدر دجاج مسلوق + خضار" },
                    { name: "العشاء", desc: "زبادي يوناني + توت أو فراولة", cal: 150, alt: "كوب حليب خالي الدسم + ثمرة فاكهة" },
                    { name: "سناك", desc: "برتقالة", cal: 50, alt: "2 خيار + جزر" }
                ]
            },
            {
                day: "اليوم الرابع",
                meals: [
                    { name: "الإفطار", desc: "جبنة قريش بالطماطم + شريحة توست", cal: 220, alt: "2 بياض بيض مسلوق + خيار" },
                    { name: "الغداء", desc: "سمكة مشوية متوسطة + 4 ملاعق أرز + سلطة", cal: 400, alt: "علبة تونة + مكرونة (4 ملاعق) + سلطة" },
                    { name: "العشاء", desc: "2 بيضة مسلوقة + سلطة", cal: 200, alt: "قطعة جبن قريش + جرجير" },
                    { name: "سناك", desc: "قطعة شوكولاتة داكنة صغيرة", cal: 60, alt: "تمر (3 حبات)" }
                ]
            },
            {
                day: "اليوم الخامس",
                meals: [
                    { name: "الإفطار", desc: "فول (4 ملاعق) بدون زيت + نصف رغيف سن", cal: 300, alt: "بيضة مسلوقة + جبنة قريش + توست" },
                    { name: "الغداء", desc: "150 جم صدور دجاج + خضار مشكل", cal: 380, alt: "لحم مفروم (بدون دهون) + كوسة " },
                    { name: "العشاء", desc: "سلطة فواكه (بدون سكر)", cal: 150, alt: "زبادي لايت" },
                    { name: "سناك", desc: "قبضة يد فشار بدون زيت", cal: 90, alt: "ترمس (كمية قبضتين)" }
                ]
            },
            {
                day: "اليوم السادس",
                meals: [
                    { name: "الإفطار", desc: "بان كيك شوفان (موزة + بيضة + شوفان)", cal: 350, alt: "بليلة باللبن (بدون سكر) - طبق صغير" },
                    { name: "الغداء", desc: "ملوخية أو بامية (بدون دهون) + قطعة لحم + سلطة", cal: 420, alt: "دجاج في الفرن + خضار" },
                    { name: "العشاء", desc: "زبادي + ليمون", cal: 100, alt: "تفاحة" },
                    { name: "سناك", desc: "حبة كمثرى", cal: 60, alt: "جوافة" }
                ]
            },
            {
                day: "اليوم السابع",
                meals: [
                    { name: "الإفطار", desc: "يوم مفتوح (وجبة واحدة حرة)", cal: "800+", alt: "-" },
                    { name: "الغداء", desc: "وجبة الغداء حرة (باعتدال)", cal: "800+", alt: "-" },
                    { name: "العشاء", desc: "زبادي خالي الدسم", cal: 100, alt: "-" },
                    { name: "سناك", desc: "قهوة أو شاي بدون سكر", cal: 10, alt: "-" }
                ]
            }
        ]
    },
    2000: {
        title: "نظام 2000 سعرة حرارية (متوازن)",
        days: [
            {
                day: "اليوم الأول",
                meals: [
                    { name: "الإفطار", desc: "3 بيضات أومليت + 2 توست بني + خضار", cal: 450, alt: "شوفان (60 جم) بالحليب والمكسرات" },
                    { name: "الغداء", desc: "200 جم دجاج مشوي + 8 ملاعق أرز + سلطة", cal: 600, alt: "سمك مشوي (300 جم) + بطاطس ودجز" },
                    { name: "العشاء", desc: "150 جم جبنة قريش + رغيف سن", cal: 300, alt: "2 بيضة مسلوقة + توست + طماطم" },
                    { name: "سناك", desc: "موزة + زبدة فول سوداني", cal: 200, alt: "بروتين بار" }
                ]
            },
            {
                day: "اليوم الثاني",
                meals: [
                    { name: "الإفطار", desc: "شوفان (60 جم) بالحليب كامل الدسم + عسل", cal: 400, alt: "ساندوتش جبنة شيدر + ديك رومي مدخن" },
                    { name: "الغداء", desc: "وجبة سمك مشوي كبيرة + أرز صيادية + سلطة", cal: 650, alt: "مكرونة بشاميل (قطعة متوسطة) + سلطة" },
                    { name: "العشاء", desc: "سلطة تونة بالذرة والفاصوليا الحمراء", cal: 350, alt: "ناجتس مشوي (منزلي) + كاتشب" },
                    { name: "سناك", desc: "بروتين بار أو مكسرات", cal: 200, alt: "زبادي بالفواكه" }
                ]
            },
            // ... Adding streamlined days for brevity but keeping structure consistent ...
            {
                day: "اليوم الثالث",
                meals: [
                    { name: "الإفطار", desc: "ساندوتش زبدة فول سوداني وموز", cal: 450, alt: "3 بيضات مسلوقة + 2 توست" },
                    { name: "الغداء", desc: "مكرونة (150 جم) مع كرات اللحم + سلطة", cal: 650, alt: "فاهيتا دجاج + خبز تورتيلا" },
                    { name: "العشاء", desc: "3 بيضات مسلوقة + توست", cal: 300, alt: "فول بالطحينة + نصف رغيف" },
                    { name: "سناك", desc: "زبادي بالفواكه", cal: 150, alt: "حفنة مكسرات" }
                ]
            },
            {
                day: "اليوم الرابع",
                meals: [
                    { name: "الإفطار", desc: "فول مدمس (طبق وسط) + رغيف بلدي + سلطة", cal: 450, alt: "عجة بيض بالخضار + خبز" },
                    { name: "الغداء", desc: "ستيك لحم (150 جم) + بطاطس مهروسة + خضار", cal: 650, alt: "كفتة مشوية + مكرونة" },
                    { name: "العشاء", desc: "زبادي يوناني + شوفان", cal: 300, alt: "ساندوتش جبنة بيضاء صغير" },
                    { name: "سناك", desc: "عصير برتقال فريش", cal: 120, alt: "قطعة شوكولاتة" }
                ]
            },
            {
                day: "اليوم الخامس",
                meals: [
                    { name: "الإفطار", desc: "شكشوكة (3 بيضات) + رغيف سن", cal: 400, alt: "بان كيك شوفان وعسل" },
                    { name: "الغداء", desc: "فاهيتا دجاج (200 جم) + خبز تورتيلا", cal: 600, alt: "شاورما دجاج منزلي + خبز صاج" },
                    { name: "العشاء", desc: "جبنة بيضاء + خيار + توست", cal: 250, alt: "سلطة يونانية" },
                    { name: "سناك", desc: "حفنة مكسرات مشكلة", cal: 150, alt: "فشار" }
                ]
            },
            {
                day: "اليوم السادس",
                meals: [
                    { name: "الإفطار", desc: "بان كيك صحي + قهوة", cal: 400, alt: "كورن فليكس + حليب" },
                    { name: "الغداء", desc: "طاجن خضار باللحمة + أرز", cal: 650, alt: "سمك فيليه مقلي (اير فراير) + رز" },
                    { name: "العشاء", desc: "سلطة سيزر بالدجاج", cal: 350, alt: "توست + تركي مدخن" },
                    { name: "سناك", desc: "تفاحة", cal: 60, alt: "-" }
                ]
            },
            {
                day: "اليوم السابع",
                meals: [
                    { name: "الإفطار", desc: "بيض عيون + بسطرمة + خبز", cal: 500, alt: "يوم مفتوح" },
                    { name: "الغداء", desc: "كبسة دجاج + سلطة زبادي", cal: 700, alt: "يوم مفتوح" },
                    { name: "العشاء", desc: "فاكهة مشكلة", cal: 200, alt: "-" },
                    { name: "سناك", desc: "قطعة حلوى", cal: 250, alt: "-" }
                ]
            }
        ]
    },
    2500: {
        title: "نظام 2500 سعرة حرارية (تضخيم)",
        days: [
            {
                day: "اليوم الأول",
                meals: [
                    { name: "الإفطار", desc: "4 بيضات + شوفان بالحليب والمكسرات", cal: 700, alt: "-" },
                    { name: "الغداء", desc: "250 جم صدور دجاج + طبق أرز كبير + خضار", cal: 800, alt: "-" },
                    { name: "العشاء", desc: "علبة تونة كبيرة + مكرونة مسلوقة + ذرة", cal: 600, alt: "-" },
                    { name: "سناك", desc: "سموثي (موز، حليب، بروتين)", cal: 350, alt: "-" }
                ]
            },
            // Simplified for brevity - usually user explores one option
            {
                day: "نموذج يومي",
                meals: [
                    { name: "الإفطار", desc: "4 بيضات أومليت + شوفان 100جم + حليب", cal: 750, alt: "فول بالبيض + خبز كبير" },
                    { name: "الغداء", desc: "300 جم لحم/دجاج + 300 جم أرز + خضار", cal: 900, alt: "مكرونة بشاميل + فراخ بانيه" },
                    { name: "العشاء", desc: "جبنة قريش 250جم + زيت زيتون + 2 خبز", cal: 550, alt: "تونة + بطاطس مهروسة" },
                    { name: "سناك", desc: "مكسرات + فواكه مجففة", cal: 300, alt: "بروتين شيك" }
                ]
            },
            {
                day: "تنويه",
                meals: [
                    { name: "ملاحظة", desc: "يمكنك تكرار النماذج مع تغيير مصادر البروتين والكربوهيدرات بنفس الكميات", cal: 0, alt: "-" },
                ]
            }
        ]
    },
    3000: {
        title: "نظام 3000 سعرة حرارية (تضخيم عالي)",
        days: [
            {
                day: "نموذج يومي 1",
                meals: [
                    { name: "الإفطار", desc: "5 بيضات + 100جم شوفان + حليب + عسل", cal: 850, alt: "-" },
                    { name: "الغداء", desc: "300 جم دجاج/لحم + 400 جم أرز + خضار", cal: 1000, alt: "-" },
                    { name: "العشاء", desc: "200 جم لحم مفروم + 200 جم مكرونة", cal: 750, alt: "-" },
                    { name: "سناك", desc: "سموثي بروتين (موز، شوفان، زبدة سوداني)", cal: 400, alt: "-" }
                ]
            },
            {
                day: "نموذج يومي 2",
                meals: [
                    { name: "الإفطار", desc: "ساندوتشات جبنة وبيف بيكون (4 توست) + عصير", cal: 900, alt: "-" },
                    { name: "الغداء", desc: "سمك مشوي (كيلو إلا ربع) + أرز صيادية كبير", cal: 1100, alt: "-" },
                    { name: "العشاء", desc: "3 علب تونة + بطاطس مسلوقة", cal: 700, alt: "-" },
                    { name: "سناك", desc: "مكسرات + تمر + حليب", cal: 450, alt: "-" }
                ]
            }
        ]
    }
};

// --- Calorie Calculator (Mifflin-St Jeor) ---
document.getElementById('calorie-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseFloat(document.getElementById('c-age').value);
    const weight = parseFloat(document.getElementById('c-weight').value);
    const height = parseFloat(document.getElementById('c-height').value);
    const activity = parseFloat(document.getElementById('c-activity').value);

    // Calculate BMR
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // Calculate TDEE
    const tdee = Math.round(bmr * activity);

    // Goals
    const cut = tdee - 500;
    const bulk = tdee + 500;

    // Calculate Protein (approx 2g per kg)
    const protein = Math.round(weight * 2);

    // Calculate Water Intake (approx 33-35ml per kg)
    const water = (weight * 0.035).toFixed(1);

    const resultBox = document.getElementById('calorie-result');
    resultBox.innerHTML = `
        <h4>نتائج السعرات الحرارية</h4>
        <div class="result-item"><span>معدل الحرق الأساسي (BMR):</span> <span class="result-value">${Math.round(bmr)} سعرة</span></div>
        
        <div class="result-item" style="margin-bottom:0; border-radius:5px 5px 0 0;"><span>السعرات للمحافظة (TDEE):</span> <span class="result-value" style="color:var(--primary-color)">${tdee} سعرة</span></div>
        <div class="result-sub-item"><span>البروتين اليومي المقترح: ≈</span> <span>${protein} جم</span></div>

        <div class="result-item" style="margin-bottom:0; border-radius:5px 5px 0 0;"><span>لخسارة الوزن (تنشيف):</span> <span class="result-value">${cut} سعرة</span></div>
        <div class="result-sub-item"><span>البروتين اليومي المقترح: ≈</span> <span>${protein} جم</span></div>

        <div class="result-item" style="margin-bottom:0; border-radius:5px 5px 0 0;"><span>لزيادة الوزن (تضخيم):</span> <span class="result-value">${bulk} سعرة</span></div>
        <div class="result-sub-item"><span>البروتين اليومي المقترح: ≈</span> <span>${protein} جم</span></div>

        <div class="result-item" style="background:rgba(52, 152, 219, 0.2); border:1px solid #3498db;">
            <span><i class="fas fa-tint" style="color:#3498db; margin-left:5px;"></i> احتياج الماء اليومي:</span> 
            <span class="result-value" style="color:#3498db">${water} لتر</span>
        </div>

        <div class="disclaimer-text">
            ⚠️ القيم تقديرية وقد تختلف من شخص لآخر
            <br>
            <span style="font-size: 0.75rem; color: #777; margin-top: 5px; display: block;">تم الحساب باستخدام معادلة Mifflin-St Jeor</span>
        </div>
        
        <!-- Diet Plan Container -->
        <div class="diet-plan-section">
            <div class="diet-plan-header">
                <h3>جدول غذائي مقترح</h3>
                <p style="color:var(--text-muted); font-size:0.9rem;">اختر هدفك لعرض الجدول المناسب</p>
            </div>
            <div class="diet-toggle-btns">
                <button class="diet-btn" onclick="showDiet(${cut})">تنشيف (${cut})</button>
                <button class="diet-btn active" onclick="showDiet(${tdee})">محافظة (${tdee})</button>
                <button class="diet-btn" onclick="showDiet(${bulk})">تضخيم (${bulk})</button>
            </div>
            <div id="diet-grid" class="diet-week-grid">
                <!-- Diet Cards go here -->
            </div>
        </div>
    `;

    // Initial render of diet plan (Maintenance)
    showDiet(tdee);

    resultBox.classList.remove('hidden');
});

// Function to select and render the appropriate diet plan
window.showDiet = function (calories) {
    // Select plan based on calories
    let selectedPlanKey = 2000;
    if (calories < 1750) selectedPlanKey = 1500;
    else if (calories < 2250) selectedPlanKey = 2000;
    else if (calories < 2750) selectedPlanKey = 2500;
    else selectedPlanKey = 3000;

    const plan = dietPlans[selectedPlanKey];
    const grid = document.getElementById('diet-grid');

    // Update Active Buttons
    const btns = document.querySelectorAll('.diet-btn');
    btns.forEach(btn => {
        if (btn.textContent.includes(calories)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Render HTML
    let html = '';

    // Check if the plan has 'days' structure
    if (plan && plan.days) {
        plan.days.forEach(day => {
            let mealsHtml = '';
            // New Structure: Loop through meals array
            if (day.meals) {
                day.meals.forEach(meal => {
                    mealsHtml += `
                    <div class="meal-row">
                        <span class="meal-label">${meal.name} <span class="meal-cal-badge">(${meal.cal} سعرة)</span></span>
                        <span class="meal-content">${meal.desc}</span>
                        ${meal.alt && meal.alt !== '-' ? `<div class="meal-alt">${meal.alt}</div>` : ''}
                    </div>
                    `;
                });
            }

            html += `
                <div class="diet-day-card">
                    <div class="day-title">${day.day}</div>
                    ${mealsHtml}
                </div>
            `;
        });
    }

    grid.innerHTML = html;
};


// --- Body Fat Calculator (US Navy Method) ---
const fatForm = document.getElementById('fat-form');
if (fatForm) {
    fatForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const gender = document.querySelector('input[name="f-gender"]:checked').value;
        const weight = parseFloat(document.getElementById('f-weight').value); // Added weight reading
        const waist = parseFloat(document.getElementById('f-waist').value);
        const neck = parseFloat(document.getElementById('f-neck').value);
        const height = parseFloat(document.getElementById('f-height').value);
        const hip = gender === 'female' ? parseFloat(document.getElementById('f-hip').value) : 0;

        let bodyFat;

        // Formulas use log10 and measurements in cm
        if (gender === 'male') {
            bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
        } else {
            bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
        }

        const resultBox = document.getElementById('fat-result');

        let status = '';
        const bf = bodyFat.toFixed(1);

        // Simple classification
        if (gender === 'male') {
            if (bf < 6) status = 'دهون أساسية';
            else if (bf < 14) status = 'رياضي';
            else if (bf < 18) status = 'لائق';
            else if (bf < 25) status = 'متوسط';
            else status = 'سمين';
        } else { // female
            if (bf < 14) status = 'دهون أساسية';
            else if (bf < 21) status = 'رياضية';
            else if (bf < 25) status = 'لائقة';
            else if (bf < 32) status = 'متوسط';
            else status = 'سمينة';
        }

        // Calculate Mass
        const fatMass = (weight * (bodyFat / 100)).toFixed(1);
        const leanMass = (weight - parseFloat(fatMass)).toFixed(1);

        resultBox.innerHTML = `
        <h4>نسبة الدهون في الجسم</h4>
        <div style="font-size: 3rem; font-weight:bold; color:var(--primary-color); margin: 10px 0;">${bf}%</div>
        <div class="result-item"><span>التصنيف:</span> <span class="result-value">${status}</span></div>
        
        <div class="result-item" style="margin-bottom:0; border-radius:5px 5px 0 0;"><span>كتلة الدهون:</span> <span class="result-value">${fatMass} كجم</span></div>
        <div class="result-item" style="border-radius:0 0 5px 5px;"><span>الكتلة العضلية (والعظم):</span> <span class="result-value">${leanMass} كجم</span></div>

        <p style="font-size:0.8rem; margin-top:10px; color:#aaa;">*هذه النتيجة تقريبية بناءً على معادلة البحرية الأمريكية.</p>
    `;
        resultBox.classList.remove('hidden');
    });
}

// --- BMI Calculator ---
const bmiForm = document.getElementById('bmi-form');
if (bmiForm) {
    bmiForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const weight = parseFloat(document.getElementById('b-weight').value);
        const heightMetres = parseFloat(document.getElementById('b-height').value) / 100; // convert to meters

        const bmi = weight / (heightMetres * heightMetres);
        const bmiFixed = bmi.toFixed(1);

        // Healthy Range Calculation
        const minWeight = (18.5 * heightMetres * heightMetres).toFixed(1);
        const maxWeight = (24.9 * heightMetres * heightMetres).toFixed(1);

        let status = '';
        let color = '';

        if (bmi < 18.5) { status = 'نحافة'; color = '#3498db'; }
        else if (bmi < 25) { status = 'وزن مثالي'; color = '#00ff88'; }
        else if (bmi < 30) { status = 'زيادة وزن'; color = '#f1c40f'; }
        else { status = 'سمنة'; color = '#e74c3c'; }

        const resultBox = document.getElementById('bmi-result');
        resultBox.innerHTML = `
        <h4>مؤشر كتلة الجسم (BMI)</h4>
        <div style="font-size: 3rem; font-weight:bold; color:${color}; margin: 10px 0;">${bmiFixed}</div>
        <div class="result-item"><span>الحالة:</span> <span class="result-value" style="color:${color}">${status}</span></div>
        <div class="result-sub-item" style="margin-top:10px; border-radius:5px; border:1px solid #444;"><span>الوزن المثالي لطولك:</span> <span>${minWeight} - ${maxWeight} كجم</span></div>
    `;
        resultBox.classList.remove('hidden');
    });
}

// --- Food Calorie Calculator Logic ---
const addFoodBtn = document.getElementById('add-food-btn');
const foodSelect = document.getElementById('food-select');
const foodQty = document.getElementById('food-qty');
const mealList = document.getElementById('meal-list');
const mealTotalEl = document.getElementById('meal-total-calories');

let totalMealCalories = 0;

if (addFoodBtn) {
    addFoodBtn.addEventListener('click', () => {
        const selectedOption = foodSelect.options[foodSelect.selectedIndex];
        const calPerUnit = parseFloat(selectedOption.value);
        const qty = parseFloat(foodQty.value);
        const foodName = selectedOption.text;

        if (!selectedOption.value || isNaN(qty) || qty <= 0) {
            alert('يرجى اختيار طعام وتحديد الكمية بشكل صحيح');
            return;
        }

        const itemTotalCal = Math.round(calPerUnit * qty);

        // Update Total
        totalMealCalories += itemTotalCal;
        mealTotalEl.innerText = totalMealCalories;

        // Add to UI List
        const div = document.createElement('div');
        div.className = 'meal-item';
        div.innerHTML = `
            <div style="display:flex; align-items:center;">
                <button class="delete-item-btn" onclick="removeFoodItem(this, ${itemTotalCal})">X</button>
                <span class="meal-item-name">${foodName} <small>(x${qty})</small></span>
            </div>
            <span class="meal-item-cal">${itemTotalCal} سعرة</span>
        `;
        mealList.appendChild(div);

        // Reset Inputs
        foodSelect.value = "";
        foodQty.value = "1";
    });
}

// Function to remove item
window.removeFoodItem = function (btn, calories) {
    const item = btn.closest('.meal-item');
    item.remove();
    totalMealCalories -= calories;
    mealTotalEl.innerText = totalMealCalories;
};


// --- Auto-Save Feature ---
const autoSaveInputs = ['c-age', 'c-weight', 'c-height', 'c-activity', 'f-age', 'f-weight', 'f-height', 'f-neck', 'f-waist', 'f-hip', 'b-weight', 'b-height'];

// Load saved data
window.addEventListener('load', () => {
    autoSaveInputs.forEach(id => {
        const value = localStorage.getItem(id);
        const el = document.getElementById(id);
        if (value && el) {
            // Set as placeholder (suggestion) instead of filling the value
            el.setAttribute('placeholder', value);
        }
    });
});

// Save data on change
autoSaveInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('input', () => {
            localStorage.setItem(id, el.value);
        });
    }
});
