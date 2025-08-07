import loanProductCategories from '../json/loan-product-categories.json'

const processesData = [
  // 1
  {
    id: '01JX012EQQTY0EYDVPZ6CWXEXT',
    displayName: 'Application Generation',
    pages: [
      {
        id: '01JX014XTAQVVZJS9FJVAVJGMB',
        displayName: 'Customer Profile Detail',
        level: 1
      },
      {
        id: '01JX014XTA47XSFYTTQ581BN3G',
        displayName: 'Assets Property',
        level: 2
      },
      {
        id: '01JX014XTABHNNE08FNNT338S5',
        displayName: 'Assets Vehicle',
        level: 3
      },
      {
        id: '01JX014XTA6HHH6Z11M1ZVT0PW',
        displayName: 'Assets Gold',
        level: 4
      },
      {
        id: '01JX014XTA3MFCYN8HK8E0ZRHE',
        displayName: 'Assets Consumer Durable Items',
        level: 5
      },
      {
        id: '01JX014XTARAMWQBTXHPPSPVHY',
        displayName: 'Education Course And Fee Detail',
        level: 6
      },
      {
        id: '01JX014XTAMZ2BHASZK8KRF5CQ',
        displayName: 'Portfolio Collateral',
        level: 7
      },
      {
        id: '01JX014XTA07SDKY6NE5RV7Z7K',
        displayName: 'Shares And Security Collateral',
        level: 8
      }
    ],
    children: [
      {
        id: '01JX012EQRWZ35EARAEW27CQ7S',
        displayName: 'CBC Process',
        pages: [
          {
            id: '01JX014XTA2KF0HMKQVDYHJJKG',
            displayName: 'Customer CBC Report',
            level: 1
          }
        ],
        children: []
      }
    ]
  },
  // 2
  {
    id: '01JX012EQR8NP1NCTPRYW3X43G',
    displayName: 'Send To Credit',
    pages: [
      {
        id: '01JX014XTAX0Q5P3HZDG3KYF81',
        displayName: 'Branch Manager Review',
        level: 1
      }
    ],
    children: [
      {
        id: '01JX012EQRXM5N0CGK8KABWT70',
        displayName: 'TVR Process',
        pages: [
          {
            id: '01JX014XTAE019A33BCKCAC4F3',
            displayName: 'Customer TVR Questions',
            level: 1
          }
        ],
        children: []
      }
    ]
  },
  // 3
  {
    id: '01JX012EQRKW810XWV9ZVNATBQ',
    displayName: 'Credit Recommendation',
    pages: [
      {
        id: '01JX014XTAVPAN2SST6N8995KR',
        displayName: 'Sanction Conditions',
        level: 1
      },
      {
        id: '01JX014XTA4RSV4QP2WYF8ZKHH',
        displayName: 'Loan Financial Detail',
        level: 2
      },
      {
        id: '01JX014XTAC7F5SAAKHA5BN5P1',
        displayName: 'Receipt And Deductions',
        level: 3
      },
      {
        id: '01JYK9NQH2NTJPG1T6QAMBRGXJ',
        displayName: 'FOIR',
        level: 4
      }
    ],
    children: [
      {
        id: '01JX012EQR0HCSYNT1NP49KP56',
        displayName: 'FI Process',
        pages: [
          {
            id: '01JX014XTACN6ZCV8GP5J1YQDA',
            displayName: 'Customer FI Questions',
            level: 1
          },
          {
            id: '01JX014XTA3FJ3W25SJ1Y0B92R',
            displayName: 'Customer References',
            level: 2
          },
          {
            id: '01JX014XTA683B42F5HXYSG8HF',
            displayName: 'Customer Family Member',
            level: 3
          }
        ],
        children: []
      },

      {
        id: '01JX012EQR7HE9T1T9F06YGKKZ',
        displayName: 'Valuation Process',
        pages: [
          {
            id: '01JZ0D4W3R98C32EGSAX8QD4BQ',
            displayName: 'Assets Property Valuation',
            level: 1
          },
          {
            id: '01JZ0D5V1YJNJ0093N3G0XRTKQ',
            displayName: 'Assets Vehicle Valuation',
            level: 2
          }
        ],
        children: []
      },
      {
        id: '01JX012EQR8C394HBVZQ7M9XB2',
        displayName: 'Legal Process',
        pages: [
          {
            id: '01JX014XTA873QPW5PD47CKAYA',
            displayName: 'Property Assets Technical Detail',
            level: 1
          }
        ],
        children: []
      },
      {
        id: '01JX012EQRRPQ4QPW0BS5ZHWZV',
        displayName: 'Application Credit PD',
        pages: [
          {
            id: '01JX014XTAB8RN05GQRYKZQW6T',
            displayName: 'Customer PD Questions',
            level: 1
          },
          {
            id: '01JX014XTA9Q0YDVVG06Q471JG',
            displayName: 'Customer Income Details',
            level: 2
          },
          {
            id: '01JX014XTASXWJ1VFP7H291PE5',
            displayName: 'Customer Expenditure',
            level: 3
          },
          {
            id: '01JY9284FFETVFFXVZ6BR7MEAD',
            displayName: 'Customer Obligation',
            level: 4
          }
        ],
        children: []
      }
    ]
  },
  // 4
  {
    id: '01JX012EQRME00H330E225S4NK',
    displayName: 'Credit Approval',
    pages: [
      {
        id: '01JX014XTACRTFJTAGFAWRHHMH',
        displayName: 'Credit Approval Remarks',
        level: 1
      },
      {
        id: '01K0C0DB5CBRYQF4YMPN7X297T',
        displayName: 'Approved Financials',
        level: 2
      }
    ],
    children: [
      {
        id: '01JX012EQR7HE9T1T9F06YGKKZ',
        displayName: 'Valuation Process',
        pages: [
          {
            id: '01JZ0D4W3R98C32EGSAX8QD4BQ',
            displayName: 'Assets Property Valuation',
            level: 1
          },
          {
            id: '01JZ0D5V1YJNJ0093N3G0XRTKQ',
            displayName: 'Assets Vehicle Valuation',
            level: 2
          }
        ],
        children: []
      },
      {
        id: '01JX012EQR8C394HBVZQ7M9XB2',
        displayName: 'Legal Process',
        pages: [
          {
            id: '01JX014XTA873QPW5PD47CKAYA',
            displayName: 'Property Assets Technical Detail',
            level: 1
          }
        ],
        children: []
      },
      {
        id: '01JX012EQRRJNYG6JJ2671BCET',
        displayName: 'Lender Approval',
        pages: [
          {
            id: '01JX014XTA7737CRT3P2S0XY8N',
            displayName: 'Lender Sanction Conditions',
            level: 1
          },
          {
            id: '01JX014XTANE31RYH3T25A01QT',
            displayName: 'Lender Financial Detail',
            level: 2
          }
        ],
        children: []
      }
    ]
  },
  // 5
  {
    id: '01JX012EQR6KAXS6XN4M14RHE9',
    displayName: 'File Processing',
    pages: [
      {
        id: '01JX014XTAKG0K4HNQT1XNBYEY',
        displayName: 'Customer PDC Detail',
        level: 1
      },
      {
        id: '01JX014XTAPD4GEDZN2SKQHP2V',
        displayName: 'Insurance Detail',
        level: 2
      },
      {
        id: '01JX014XTAVG5J77NZWAPPT32D',
        displayName: 'Property Assets Mortgage Detail',
        level: 3
      },
      {
        id: '01JX014XTACHKWZKW7XVX0VMX2',
        displayName: 'Payment Request',
        level: 4
      },
      {
        id: '01JX014XTAYZJ2V5T4P98GW925',
        displayName: 'Nach Registration',
        level: 5
      }
    ],
    children: []
  },
  // 6
  {
    id: '01JX012EQRX6Y7DR76QVMK4DR4',
    displayName: 'Convert To Loan',
    pages: [
      {
        id: '01JX014XTA1K9N91YCM5ABQDS7',
        displayName: 'Loan No Generate',
        level: 1
      },
      {
        id: '01JX014XTA2F3MWA9VXGRX9Z3Q',
        displayName: 'File Receiving',
        level: 2
      },
      {
        id: '01JX014XTAH4CNMXR8N7N8KPH8',
        displayName: 'File Checking List',
        level: 3
      }
    ],
    children: []
  },
  // 7
  // {
  //   id: '01JX012EQRQZ9WKATT2108XDFP',
  //   displayName: 'DV Creation',
  //   pages: [
  //     {
  //       id: '01JX014XTAW1Y0EQG8YM95QGMC',
  //       displayName: 'Disbursment Voucher Creation',
  //       level: 1
  //     }
  //   ],
  //   children: []
  // },
  // // 8
  // {
  //   id: '01JX012EQRE06W5BF7T8JXP0K8',
  //   displayName: 'DV Authorization',
  //   pages: [
  //     {
  //       id: '01JX014XTAAAJPN6SKX611RDAZ',
  //       displayName: 'Disbursment Voucher Authorization',
  //       level: 1
  //     }
  //   ],
  //   children: []
  // },
  // 9
  {
    id: '01JX012EQRVGKF11F4ZV9DV16C',
    displayName: 'Payment Authorization',
    pages: [
      {
        id: '01JX014XTAKVWDSKEZQHF4ADHG',
        displayName: 'Payment Authorization',
        level: 1
      }
    ],
    children: []
  },
  // 10
  {
    id: '01JX012EQRR1J7W05XAG9QYZXZ',
    displayName: 'Payment Initiation',
    pages: [
      {
        id: '01JX014XTA314PEGCBTV43SJH1',
        displayName: 'Payment Initiation',
        level: 1
      }
    ],
    children: []
  },
  // 11
  {
    id: '01JX012EQR8EGD9Y5MR3DR22FB',
    displayName: 'Amortization Generate',
    pages: [
      {
        id: '01JX014XTAXBQEPXHG22JR4S1M',
        displayName: 'Amortization Generate',
        level: 1
      }
    ],
    children: []
  }
]

type Page = { id: string; level: number }
type Process = { id: string; pages: Page[]; children: Process[] }

const flattened = loanProductCategories.flatMap((category, cIdx) =>
  (function flatten(data: Process[]) {
    return data.flatMap((p) => [
      ...p.pages.map((pg) => ({
        categoryId: category.id,
        processId: p.id,
        processPageId: pg.id,
        level: pg.level
      })),
      ...flatten(p.children)
    ])
  })(processesData)
)

const jsonData = JSON.stringify(flattened, null, 2)
console.log(jsonData)
