import type { Payload } from "payload";

const data = [
  {
    institutionName: "SMKN 3 Depok",
    major: "Computer Network Engineering",
    startDate: "2014-06-19 19:00:00+07",
    endDate: "2017-06-19 19:00:00+07",
  },
  {
    institutionName: "National Institute of Science and Technology (ISTN)",
    major: "Informatic Engineering",
    startDate: "2018-09-19 19:00:00+07",
    endDate: "2012-03-18 19:00:00+07",
  }
]

export const script = async(payload: Payload) => {
  console.log("🌱 start seeding educations");

  for(const row of data) {
    await payload.create({
      collection: 'educations',
      data: row
    })
  }

  console.log("🌱 done seeding educations");
}