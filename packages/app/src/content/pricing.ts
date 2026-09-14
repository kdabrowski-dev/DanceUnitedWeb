/**
 * Pricing packages shown on /pricing. Edit this list directly to add, remove, or
 * reprice a package - there's no admin panel or database on this static site.
 */
export interface PricingPackage {
  id: string
  name: string
  description: string
  classCount: number
  price: string
  validityDays: number
  category: string
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'single-class',
    name: 'Single Class',
    description: 'One time entry',
    classCount: 1,
    price: '40',
    validityDays: 14,
    category: 'UNIVERSAL',
  },
  {
    id: 'four-classes',
    name: '4 Classes',
    description: 'Valid for 1 month',
    classCount: 4,
    price: '140',
    validityDays: 30,
    category: 'UNIVERSAL',
  },
  {
    id: 'open-pass',
    name: 'Open Pass',
    description: 'Unlimited access',
    classCount: 999,
    price: '350',
    validityDays: 30,
    category: 'UNIVERSAL',
  },
]
