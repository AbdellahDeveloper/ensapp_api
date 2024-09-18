'use client'

import * as React from 'react'
import { 
  ChevronsUpDown, 
  Home, 
  Building, 
  Filter, 
  CircleCheckBig, 
  SortAsc, 
  MapPin, 
  Landmark, 
  Euro, 
  Maximize, 
  BedDouble,
  Check
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useTheme } from 'next-themes'

 
export function AppCombobox({ label, options, icon:Icon }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
 
  return (
    <div className='space-y-2'>
      <label
        className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        <Icon className="mr-2 h-4 w-4" />
        {label}
      </label>
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border-gray-800 dark:border-white hover:bg-white dark:hover:bg-gray-800"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select "+label+"..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 ">
        <Command className="dark:bg-gray-800 bg-white">
          <CommandInput placeholder={`Search ${label}...`} />
          <CommandList>
            <CommandEmpty>No {label} found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    </div>
  )
}


const RangeSlider = ({ label, min, max, step, value, onChange, isLast = false, icon: Icon }) => {
  const handleSliderChange = (newValue) => {
    onChange(newValue)
  }

  const handleInputChange = (index, newValue) => {
    const updatedValue = [...value]
    updatedValue[index] = Number(newValue)
    onChange(updatedValue)
  }

  const { theme } = useTheme()

  return (
    (<div className={cn("space-y-2", isLast && "pb-6")}>
      <div className="flex items-center justify-between">
        <label
          className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          <Icon className="mr-2 h-4 w-4" />
          {label}
        </label>
        <Button
          size="icon"
          variant="outline"
          className={cn("rounded-full p-1 transition-colors", theme === 'dark' 
            ? "bg-white border-black text-black hover:bg-black hover:text-white" 
            : "bg-white border-black text-black hover:bg-black hover:text-white")}>
          <CircleCheckBig className="h-4 w-4" />
        </Button>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={handleSliderChange}
        className="w-full" />
      <div className="flex items-center space-x-2">
        <Input
          type="number"
          value={value[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          className="w-full border-black dark:border-white" />
        <span>-</span>
        <Input
          type="number"
          value={value[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          className="w-full border-black dark:border-white" />
      </div>
    </div>)
  );
}

const FilterContent = ({ isMobile = false }) => {
  const [listingType, setListingType] = React.useState('A louer')
  const [budgetRange, setBudgetRange] = React.useState([19, 4473])
  const [surfaceRange, setSurfaceRange] = React.useState([20, 100])
  const [chambreRange, setChambreRange] = React.useState([1, 3])
  const { theme } = useTheme()

  const comboboxItems = [{"value":"test1","label":"test1"}, {"value":"test2","label":"test2"}, {"value":"test3","label":"test3"}]

  return (
    (<div className={"bg-white space-y-6 dark:bg-gray-800 text-gray-800 dark:text-white dark:border-white"}>
      <AppCombobox label="Trier" options={comboboxItems} icon={SortAsc} />
      <div className="space-y-2">
        <label
          className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          <Building className="mr-2 h-4 w-4" />
          Type de bien
        </label>
        <div
          className={`flex bg-gray-100 rounded-full p-1 ${theme === 'dark' ? 'bg-gray-700' : ''}`}>
          <button
            className={`flex-1 px-4 py-2 rounded-full text-sm font-medium ${
              listingType === 'A louer' 
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-black hover:bg-gray-300 dark:hover:bg-gray-300'
            }`}
            onClick={() => setListingType('A louer')}>
            <Home className="inline-block mr-2 h-4 w-4" />
            A louer
          </button>
          <button
            className={`flex-1 px-4 py-2 rounded-full text-sm font-medium ${
              listingType === 'A acheter'
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-black hover:bg-gray-300 dark:hover:bg-gray-300'
            }`}
            onClick={() => setListingType('A acheter')}>
            <Building className="inline-block mr-2 h-4 w-4" />
            A acheter
          </button>
        </div>
      </div>
      <AppCombobox label="Ville" options={comboboxItems} icon={MapPin} />
      <AppCombobox label="Arrondissements" options={comboboxItems} icon={Landmark} />
      <RangeSlider
        label="Prix (DHs)"
        min={0}
        max={10000}
        step={1}
        value={budgetRange}
        onChange={setBudgetRange}
        icon={Euro} />
      <RangeSlider
        label="Surface (m²)"
        min={0}
        max={200}
        step={1}
        value={surfaceRange}
        onChange={setSurfaceRange}
        icon={Maximize} />
      <RangeSlider
        label="Chambres"
        min={0}
        max={5}
        step={1}
        value={chambreRange}
        onChange={setChambreRange}
        isLast={true}
        icon={BedDouble} />
    </div>)
  );
}

export function PropertyFilter({id}) {
  return (
    (<div  className="w-full flex fixed md:z-10 lg:z-10 z-20">
      {/* Desktop view */}
      <div id={id} className='hidden md:block ml-2'>
      <Card className="w-full max-w-sm mx-auto  bg-white dark:bg-gray-800 text-gray-800 dark:text-white dark:border-gray-500">
        <CardContent className="p-6 ">
          <FilterContent />
        </CardContent>
      </Card>
      </div>
      {/* Mobile and Tablet view */}
      <div
        className="w-full md:hidden top-0 left-0 right-0 z-50 bg-background border-b bg-white dark:bg-gray-800 text-gray-800 dark:text-white" style={{position:'sticky'}}>
        <div className="container mx-auto px-4 py-2 relative">
          <Drawer>
            <DrawerTrigger asChild className='bg-white dark:bg-gray-800 text-gray-800 dark:text-white'>
              <Button variant="outline" className="w-full border-gray-800 dark:border-white">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Filters</DrawerTitle>
                </DrawerHeader>
                <div
                  className="p-4 pb-0 max-h-[calc(100vh-10rem)] overflow-y-auto scrollbar-hide bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
                  <FilterContent isMobile={true} />
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>)
  );
}