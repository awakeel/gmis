export const jsonData = [
  {group:'Focal Person', data:[{
    type:"input",
    label:"Full Name",
    inputType:"input",
    name:"focalpersonname",
    validations:[]
  }]},
  {
    group: "Project",
    data: [
      {
        type: "input",
        label: "Project Title",
        inputType: "text",
        name: "projectitle",
        inlist:true,
        validations: [
          {
            name: "required",
            validator: "required",
            message: "Name Required"
          }
        ]
      },
      {
        type: "select",
        label: "Priority Area",
        inputType: "select",
        name: "priorityarea",
        options: [
          { id: 1, title: "Volunerable Population" },
          { id: 1, title: "Social Sector" }
        ],
        validations: [
          {
            name: "required",
            validator: "required",
            message: "Please choose ateast one"
          }
        ]
      },
      {
        type: "select",
        label: "Province",
        inputType: "select",
        name: "province",
        validations: [],
        options: [
          { id: 1, title: "Volunerable Population" },
          { id: 1, title: "Social Sector" }
        ]
      },
      {
        type: "select",
        label: "Duration",
        inputType: "select",
        name: "duration",
        validations: [],
        options: [
          { id: 1, title: "Volunerable Population" },
          { id: 1, title: "Social Sector" }
        ]
      },
      {
        type: "select",
        label: "NOC Required",
        inputType: "select",
        name: "isnocrequired",
        validations: [],
        options: [
          { id: 1, title: "Volunerable Population" },
          { id: 1, title: "Social Sector" }
        ]
      },
      {
        type: "textarea",
        label: "Objectives",
        inputType: "textarea",
        name: "objectives",
        validations: []
      },
      {
        type: "textarea",
        label: "Activities",
        inputType: "textarea",
        name: "Activities",
        validations: []
      },
      {
        type: "textarea",
        label: "Outcomes",
        inputType: "textarea",
        name: "outcomes",
        validations: []
      }
    ]
  }
];
