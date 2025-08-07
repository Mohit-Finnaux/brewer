import chalk from 'chalk'
import * as dotenv from 'dotenv'
import { sql } from 'drizzle-orm'
import { PgTable, TableConfig } from 'drizzle-orm/pg-core'
import { drizzle } from 'drizzle-orm/postgres-js'
import { readFileSync, statSync } from 'fs'
import { join } from 'path'
import postgres from 'postgres'
import stripAnsi from 'strip-ansi'

import * as schema from '../drizzle/schema'

const envPath = '../../../../.env'
dotenv.config({ path: envPath })

const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 })
export const db = drizzle(migrationClient)

interface DataImportConfig {
  table: PgTable<TableConfig> | null
  importFilePath: string
}

const dataConfigs: DataImportConfig[] = [
  {
    table: schema.strictSequencesTable,
    importFilePath: 'strict-sequences.json'
  },
  {
    table: null,
    importFilePath: 'format-application-number.sql'
  },
  {
    table: null,
    importFilePath: 'format-cif.sql'
  },
  {
    table: null,
    importFilePath: 'pre-employee-1.sql'
  },
  {
    table: schema.employeesTable,
    importFilePath: 'employee-1.json'
  },
  {
    table: schema.designationsTable,
    importFilePath: 'designations.json'
  },
  // {
  //   table: schema.customersTable,
  //   importFilePath: "customers-1.json"
  // },
  {
    table: null,
    importFilePath: 'post-employee-1.sql'
  },
  {
    table: schema.zonesTable,
    importFilePath: 'zones.json'
  },
  {
    table: schema.optionCategoriesTable,
    importFilePath: 'option-categories.json'
  },
  { table: schema.optionDetailsTable, importFilePath: 'option-details.json' },
  { table: schema.documentsTable, importFilePath: 'documents.json' },
  {
    table: schema.customerRelationsTable,
    importFilePath: 'customer-relations.json'
  },
  {
    table: schema.firmTypesTable,
    importFilePath: 'firm-types.json'
  },
  {
    table: schema.firmTypeRelationTypesTable,
    importFilePath: 'firm-type-relation-types.json'
  },
  {
    table: schema.addressTypesTable,
    importFilePath: 'address-types.json'
  },
  {
    table: schema.profileCategoriesTable,
    importFilePath: 'profile-categories.json'
  },
  {
    table: schema.profileSubCategoriesTable,
    importFilePath: 'profile-sub-categories.json'
  },
  {
    table: schema.profilesTable,
    importFilePath: 'profiles.json'
  },
  {
    table: schema.customersTable,
    importFilePath: 'customers-2.json'
  },
  {
    table: schema.individualCustomersTable,
    importFilePath: 'individual-customers.json'
  },
  {
    table: schema.statesTable,
    importFilePath: 'states.json'
  },
  {
    table: schema.locationsTable,
    importFilePath: 'locations.json'
  },
  {
    table: schema.branchesTable,
    importFilePath: 'branches.json'
  },
  {
    table: schema.accountGroupsTable,
    importFilePath: 'account-groups.json'
  },
  {
    table: schema.accountHeadsTable,
    importFilePath: 'account-heads.json'
  },
  {
    table: schema.taxesTable,
    importFilePath: 'taxes.json'
  },
  {
    table: schema.accountTaxSlabsTable,
    importFilePath: 'account-tax-slabs.json'
  },
  {
    table: schema.accountHeadBranchesTable,
    importFilePath: 'account-head-branches.json'
  },
  {
    table: schema.assetCategoriesTable,
    importFilePath: 'asset-categories.json'
  },
  {
    table: schema.assetSubCategoriesTable,
    importFilePath: 'asset-sub-categories.json'
  },
  {
    table: schema.assetManufacturersTable,
    importFilePath: 'asset-manufacturers.json'
  },
  {
    table: schema.assetManufacturerSubCategoriesTable,
    importFilePath: 'asset-manufacturer-sub-categories.json'
  },
  {
    table: schema.menuModulesTable,
    importFilePath: 'menu-modules.json'
  },
  {
    table: schema.menuListsTable,
    importFilePath: 'menu-lists.json'
  },
  {
    table: schema.menuPagesTable,
    importFilePath: 'menu-pages.json'
  },
  {
    table: schema.employeesTable,
    importFilePath: 'employee-2.json'
  },
  {
    table: schema.designationMenuListsTable,
    importFilePath: 'designation-menu-lists.json'
  },
  {
    table: schema.designationMenuPagesTable,
    importFilePath: 'designation-menu-pages.json'
  },
  {
    table: schema.departmentsTable,
    importFilePath: 'departments.json'
  },
  {
    table: schema.employeeDepartmentsTable,
    importFilePath: 'employee-departments.json'
  },
  {
    table: schema.loanProductCategoriesTable,
    importFilePath: 'loan-product-categories.json'
  },
  {
    table: schema.processesTable,
    importFilePath: 'processes.json'
  },
  {
    table: schema.loanProductCategoryProcessesTable,
    importFilePath: 'loanProductCategoryProcesses.json'
  },
  {
    table: schema.loanProductCategoryProcessParentsTable,
    importFilePath: 'loanProductCategoryProcessParents.json'
  },
  {
    table: schema.processPagesTable,
    importFilePath: 'process-pages.json'
  },
  {
    table: schema.processPageLoanProductCategoriesTable,
    importFilePath: 'process-page-loan-product-categories.json'
  },
  {
    table: schema.loanProductsTable,
    importFilePath: 'loan-products.json'
  },
  {
    table: schema.loanProductProcessesTable,
    importFilePath: 'loan-product-processes.json'
  },
  {
    table: schema.loanProductProcessParentsTable,
    importFilePath: 'loan-product-process-parents.json'
  },
  {
    table: schema.loanProductProcessPagesTable,
    importFilePath: 'loan-product-process-pages.json'
  },
  {
    table: schema.chargesHeadsTable,
    importFilePath: 'charges-heads.json'
  },
  {
    table: schema.loanProductChargesHeadsToAccountsTable,
    importFilePath: 'loan-product-charges-heads-to-accounts.json'
  },
  {
    table: schema.cbcTypesTable,
    importFilePath: 'cbc-types.json'
  },
  {
    table: schema.questionsTable,
    importFilePath: 'questions.json'
  },
  {
    table: schema.employeeProductsTable,
    importFilePath: 'employee-products.json'
  },
  {
    table: schema.addressesTable,
    importFilePath: 'customer-addresses.json'
  },
  {
    table: schema.customerAddressTypesTable,
    importFilePath: 'customer-address-types.json'
  },
  {
    table: schema.customerKycDocumentsTable,
    importFilePath: 'customer-kyc-documents.json'
  },
  {
    table: schema.customerCommunicationsTable,
    importFilePath: 'customer-communications.json'
  },
  {
    table: schema.employeeBranchesTable,
    importFilePath: 'employee-branches.json'
  },
  {
    table: schema.employeeLosProcessesTable,
    importFilePath: 'employee-los-processes.json'
  },
  {
    table: schema.sourceTypesTable,
    importFilePath: 'source-types.json'
  },
  {
    table: schema.branchLoanProductsTable,
    importFilePath: 'branch-products.json'
  },
  {
    table: schema.areasTable,
    importFilePath: 'areas.json'
  },
  {
    table: schema.branchAreasTable,
    importFilePath: 'branch-areas.json'
  },
  {
    table: schema.documentPoliciesTable,
    importFilePath: 'document-policies.json'
  },
  {
    table: schema.documentToPoliciesTable,
    importFilePath: 'document-to-policies.json'
  },
  {
    table: schema.masterRuleTable,
    importFilePath: 'master-rules.json'
  },
  {
    table: schema.rulesTable,
    importFilePath: 'rules.json'
  },
  {
    table: schema.rulesetsTable,
    importFilePath: 'rulesets.json'
  },
  {
    table: schema.rulesetRulesTable,
    importFilePath: 'ruleset-rules.json'
  },
  {
    table: schema.workflowsTable,
    importFilePath: 'workflows.json'
  },
  {
    table: schema.workflowRulesetsTable,
    importFilePath: 'workflow-rulesets.json'
  },
  {
    table: schema.smsApiDetailsTable,
    importFilePath: 'sms-api-details.json'
  },
  {
    table: schema.companyConfigurationsTable,
    importFilePath: 'companyConfigurations.json'
  },
  {
    table: schema.companyAddressesTable,
    importFilePath: 'companyAddresses.json'
  },
  {
    table: schema.companyFinancialDetailsTable,
    importFilePath: 'companyFinancialDetails.json'
  },
  {
    table: schema.companySystemSettingsTable,
    importFilePath: 'companySystemSettings.json'
  },
  {
    table: schema.companySecuritySettingsTable,
    importFilePath: 'companySecuritySettings.json'
  },
  {
    table: schema.masterDeviationsTable,
    importFilePath: 'master-deviations.json'
  },
  {
    table: schema.voucherTypesTable,
    importFilePath: 'voucher-types.json'
  },
  {
    table: schema.designationVoucherTypesTable,
    importFilePath: 'designationVoucherTypes.json'
  },
  {
    table: schema.financialYearsTable,
    importFilePath: 'financial-years.json'
  },
  {
    table: schema.branchProductRangesTable,
    importFilePath: 'branchProductRanges.json'
  },
  {
    table: schema.branchProductRangeProcessEmployeesTable,
    importFilePath: 'branchProductRangeProcessEmployees.json'
  },
  {
    table: schema.nachFrequenciesTable,
    importFilePath: 'nach-frequencies.json'
  },
  {
    table: schema.nachFailedReasonsTable,
    importFilePath: 'nach-failed-reasons.json'
  },
  {
    table: schema.policyDocumentsTable,
    importFilePath: 'masterDocuments.json'
  }
]

function formatSize(bytes: number): string {
  return bytes < 1024 * 1024
    ? `${(bytes / 1024).toFixed(2)} KB`
    : `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function flashyDivider(length = 60): string {
  return chalk.magentaBright('─'.repeat(length))
}

function logFileInfo(type: 'SQL' | 'JSON', name: string, size: string) {
  const icon = type === 'SQL' ? '📜' : '📦'
  const typeColor = type === 'SQL' ? chalk.cyanBright : chalk.magentaBright

  const leftText = `${typeColor.bold(`${icon} ${type}`)} → ${chalk.gray.bold(name)}`
  const sizeText = chalk.gray(size)

  const totalWidth = 60
  const spacePadding = Math.max(
    0,
    totalWidth - stripAnsi(leftText).length - stripAnsi(sizeText).length
  )
  console.log(leftText + ' '.repeat(spacePadding) + sizeText)
}

async function seed() {
  console.clear()

  console.log(chalk.hex('#00ff9d')('╔' + '═'.repeat(50) + '╗'))
  console.log(
    chalk.hex('#00ff9d')('║') +
      chalk.bold.hex('#39ff14')(' 🚀 LAUNCHING SEED PROCESS ') +
      chalk.hex('#00ff9d')('║')
  )
  console.log(chalk.hex('#00ff9d')('╚' + '═'.repeat(50) + '╝\n'))

  const BATCH_SIZE = 750
  const LARGE_FILE_SIZE_BYTES = 2 * 1024 * 1024

  await db.transaction(async (tx) => {
    for (const config of dataConfigs) {
      const dir = config.table === null ? 'sql' : 'json'
      const filePath = join(__dirname, dir, config.importFilePath)
      const fileSizeBytes = statSync(filePath).size
      const fileSize = formatSize(fileSizeBytes)
      const type = config.table === null ? 'SQL' : 'JSON'

      logFileInfo(type, config.importFilePath, fileSize)

      if (config.table === null) {
        console.log(chalk.cyanBright('⚡ Firing SQL cannon...'))
        const rawSql = readFileSync(filePath, 'utf8')
        await tx.execute(sql.raw(`${rawSql}`))
        console.log(chalk.greenBright('✓ SQL executed like a boss!\n'))
      } else {
        const rawJson = readFileSync(filePath, 'utf8')
        const rows = JSON.parse(rawJson)
        console.log(
          chalk.hex('#00bfff')('📥 Injecting') +
            chalk.hex('#fffb00')(` ${rows.length} `) +
            chalk.hex('#00bfff')('records from') +
            chalk.magentaBright(` ${config.importFilePath} `)
        )

        if (fileSizeBytes > LARGE_FILE_SIZE_BYTES) {
          let batchNumber = 1
          for (let i = 0; i < rows.length; i += BATCH_SIZE) {
            const batch = rows.slice(i, i + BATCH_SIZE)
            await tx.insert(config.table).values(batch).onConflictDoNothing()
            console.log(
              chalk.gray(`    ↪ Batch #${batchNumber++} uploaded... ✅`)
            )
          }
        } else {
          await tx.insert(config.table).values(rows).onConflictDoNothing()
        }

        console.log(chalk.greenBright('✓ JSON payload deployed\n'))
      }

      console.log(flashyDivider())
    }
  })

  console.log(chalk.bgHex('#00ff9d').black('\n✨ ALL SYSTEMS GO ✨'))
  console.log(
    chalk.hex('#39ff14')('✓') +
      chalk.whiteBright(" Database fully loaded. It's showtime.")
  )
  console.log(chalk.hex('#ff00cc')('\nThanks for seeding like a legend 💾🎤\n'))
  process.exit(0)
}

seed()
