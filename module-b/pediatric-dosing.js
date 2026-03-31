var PEDIATRIC_DOSING_DATA = [
  { "generic": "Amoxicillin", "indication": "一般感染", "mg_kg_dose_min": 8.3, "mg_kg_dose_max": 16.7, "freq": "tid", "max_daily_mg": 3000, "min_age_months": 1, "notes": "高劑量(中耳炎): 25-45 mg/kg/dose bid" },
  { "generic": "Amoxicillin", "indication": "急性中耳炎(高劑量)", "mg_kg_dose_min": 25, "mg_kg_dose_max": 45, "freq": "bid", "max_daily_mg": 3000, "min_age_months": 1 },
  { "generic": "Amoxicillin/Clavulanate", "indication": "感染", "mg_kg_dose_min": 7.5, "mg_kg_dose_max": 22.5, "freq": "bid-tid", "max_daily_mg": 3000, "min_age_months": 1, "notes": "以Amoxicillin成分計算" },
  { "generic": "Cephalexin", "indication": "感染", "mg_kg_dose_min": 6.25, "mg_kg_dose_max": 25, "freq": "qid", "max_daily_mg": 4000, "min_age_months": 1 },
  { "generic": "Azithromycin", "indication": "感染", "mg_kg_dose_min": 10, "mg_kg_dose_max": 12, "freq": "qd", "max_daily_mg": 500, "min_age_months": 6, "notes": "Day1 loading後5-6mg/kg/day" },
  { "generic": "Acetaminophen", "indication": "退燒止痛", "mg_kg_dose_min": 10, "mg_kg_dose_max": 15, "freq": "q4-6h", "max_daily_mg": 4000, "max_daily_mg_per_kg": 75, "min_age_months": 0, "notes": "每日不超過5次" },
  { "generic": "Ibuprofen", "indication": "退燒止痛", "mg_kg_dose_min": 5, "mg_kg_dose_max": 10, "freq": "q6-8h", "max_daily_mg": 2400, "max_daily_mg_per_kg": 40, "min_age_months": 6 },
  { "generic": "Cetirizine", "indication": "過敏", "mg_kg_dose_min": 0.125, "mg_kg_dose_max": 0.25, "freq": "qd-bid", "max_daily_mg": 10, "min_age_months": 6, "notes": "6m-2y:2.5mg qd; 2-5y:2.5mg bid或5mg qd; ≥6y:5-10mg qd" },
  { "generic": "Loratadine", "indication": "過敏", "mg_kg_dose_min": 0.2, "mg_kg_dose_max": 0.4, "freq": "qd", "max_daily_mg": 10, "min_age_months": 24, "notes": "2-5y:5mg; ≥6y:10mg" },
  { "generic": "Montelukast", "indication": "氣喘/過敏性鼻炎", "mg_kg_dose_min": 0, "mg_kg_dose_max": 0, "freq": "qd", "max_daily_mg": 10, "min_age_months": 6, "notes": "固定劑量: 6m-5y:4mg; 6-14y:5mg; ≥15y:10mg" },
  { "generic": "Prednisolone", "indication": "氣喘急性發作", "mg_kg_dose_min": 1, "mg_kg_dose_max": 2, "freq": "qd-bid", "max_daily_mg": 60, "min_age_months": 0, "notes": "短療程3-5天不需漸減" },
  { "generic": "Oseltamivir", "indication": "流感", "mg_kg_dose_min": 3, "mg_kg_dose_max": 3, "freq": "bid", "max_daily_mg": 150, "min_age_months": 0, "notes": "≤15kg:30mg; 15-23kg:45mg; 23-40kg:60mg; >40kg:75mg bid" },
  { "generic": "Domperidone", "indication": "嘔吐", "mg_kg_dose_min": 0.25, "mg_kg_dose_max": 0.5, "freq": "tid", "max_daily_mg": 80, "max_daily_mg_per_kg": 2.4, "min_age_months": 0, "notes": "注意QT延長" },
  { "generic": "Diclofenac", "indication": "疼痛消炎", "mg_kg_dose_min": 0.5, "mg_kg_dose_max": 1, "freq": "bid-tid", "max_daily_mg": 150, "max_daily_mg_per_kg": 3, "min_age_months": 12 },
  { "generic": "Metoclopramide", "indication": "嘔吐", "mg_kg_dose_min": 0.1, "mg_kg_dose_max": 0.15, "freq": "tid", "max_daily_mg": 30, "max_daily_mg_per_kg": 0.5, "min_age_months": 12, "notes": "EPS風險高，盡量避免或短期用。1歲以下禁用" },
  { "generic": "Fluconazole", "indication": "黴菌感染", "mg_kg_dose_min": 3, "mg_kg_dose_max": 12, "freq": "qd", "max_daily_mg": 400, "min_age_months": 0, "notes": "口腔念珠菌3-6mg/kg; 嚴重感染6-12mg/kg" },
  { "generic": "Trimethoprim/Sulfamethoxazole", "indication": "UTI", "mg_kg_dose_min": 4, "mg_kg_dose_max": 6, "freq": "bid", "max_daily_mg": 320, "min_age_months": 2, "notes": "以TMP成分計算。2個月以下禁用" }
]
;
