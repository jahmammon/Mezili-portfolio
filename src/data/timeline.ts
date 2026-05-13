/**
 *  * Professional milestones data.
  */

  export interface Milestone {
    year: string;
      title: string;
        org: string;
          loc: string;

            type:
                | "GOVERNANCE"
                    | "INDUSTRIAL"
                        | "INTERNATIONAL"
                            | "HUMANITARIAN"
                                | "TECHNICAL"
                                    | "EDUCATION";

                                      status: "CURRENT" | "COMPLETED";
                                      }

                                      export const milestones: Milestone[] = [
                                        {
                                            year: "2026",
                                                title: "Digital Literacy Initiative",
                                                    org: "Algerian Network of Youth",
                                                        loc: "National",
                                                            type: "GOVERNANCE",
                                                                status: "CURRENT",
                                                                  },

                                                                    {
                                                                        year: "2025",
                                                                            title: "Asphalt Plant Diagnostic (Terex Magnum 140)",
                                                                                org: "Technical Mission",
                                                                                    loc: "Béchar",
                                                                                        type: "INDUSTRIAL",
                                                                                            status: "COMPLETED",
                                                                                              },

                                                                                                {
                                                                                                    year: "2024",
                                                                                                        title: "International Election Observer",
                                                                                                            org: "Russian Presidential Elections",
                                                                                                                loc: "Tula, Russia",
                                                                                                                    type: "INTERNATIONAL",
                                                                                                                        status: "COMPLETED",
                                                                                                                          },

                                                                                                                            {
                                                                                                                                year: "2022",
                                                                                                                                    title: "Industrial Maintenance Technician",
                                                                                                                                        org: "Messad Water",
                                                                                                                                            loc: "Djelfa",
                                                                                                                                                type: "INDUSTRIAL",
                                                                                                                                                    status: "COMPLETED",
                                                                                                                                                      },

                                                                                                                                                        {
                                                                                                                                                            year: "2022",
                                                                                                                                                                title: "Cellular Concrete Machine Operator",
                                                                                                                                                                    org: "CleverConstruction",
                                                                                                                                                                        loc: "Delly Brahim",
                                                                                                                                                                            type: "INDUSTRIAL",
                                                                                                                                                                                status: "COMPLETED",
                                                                                                                                                                                  },

                                                                                                                                                                                    {
                                                                                                                                                                                        year: "2021",
                                                                                                                                                                                            title: "Medical Caravan Coordination",
                                                                                                                                                                                                org: "National Volunteer Network",
                                                                                                                                                                                                    loc: "National",
                                                                                                                                                                                                        type: "HUMANITARIAN",
                                                                                                                                                                                                            status: "COMPLETED",
                                                                                                                                                                                                              },

                                                                                                                                                                                                                {
                                                                                                                                                                                                                    year: "2018",
                                                                                                                                                                                                                        title: "IT Support & Systems",
                                                                                                                                                                                                                            org: "Era Yemak",
                                                                                                                                                                                                                                loc: "Algiers",
                                                                                                                                                                                                                                    type: "TECHNICAL",
                                                                                                                                                                                                                                        status: "COMPLETED",
                                                                                                                                                                                                                                          },

                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                year: "2014",
                                                                                                                                                                                                                                                    title: "Mathematics & Computer Science",
                                                                                                                                                                                                                                                        org: "USTHB",
                                                                                                                                                                                                                                                            loc: "Algiers",
                                                                                                                                                                                                                                                                type: "EDUCATION",
                                                                                                                                                                                                                                                                    status: "COMPLETED",
                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                      ];
 */