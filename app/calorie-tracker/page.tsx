'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash2, Target, TrendingUp, Calendar } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

interface Food {
  id: number
  name: string
  calories: number
  protein: number
  carbs: number
  fats: number
  servingSize: string
  category: string
}

interface ConsumedFood extends Food {
  quantity: number
  consumedAt: string
}

const foodDatabase: Food[] = [
  {
    id: 1,
    name: 'Piept de Pui Grătar',
    calories: 165,
    protein: 31,
    carbs: 0,
    fats: 3.6,
    servingSize: '100g',
    category: 'Proteină'
  },
  {
    id: 2,
    name: 'Orez Brun Fiert',
    calories: 112,
    protein: 2.6,
    carbs: 24,
    fats: 0.9,
    servingSize: '100g',
    category: 'Carbohidrați'
  },
  {
    id: 3,
    name: 'Broccoli Abur',
    calories: 35,
    protein: 2.4,
    carbs: 7,
    fats: 0.4,
    servingSize: '100g',
    category: 'Legume'
  },
  {
    id: 4,
    name: 'Ouă Fierte',
    calories: 155,
    protein: 13,
    carbs: 1.1,
    fats: 11,
    servingSize: '2 ouă (100g)',
    category: 'Proteină'
  },
  {
    id: 5,
    name: 'Avocado',
    calories: 160,
    protein: 2,
    carbs: 9,
    fats: 15,
    servingSize: '100g',
    category: 'Grăsimi Sănătoase'
  },
  {
    id: 6,
    name: 'Banană',
    calories: 89,
    protein: 1.1,
    carbs: 23,
    fats: 0.3,
    servingSize: '1 bucată (100g)',
    category: 'Fructe'
  },
  {
    id: 7,
    name: 'Somon la Grătar',
    calories: 206,
    protein: 22,
    carbs: 0,
    fats: 13,
    servingSize: '100g',
    category: 'Proteină'
  },
  {
    id: 8,
    name: 'Cartofi Dulci Copți',
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fats: 0.1,
    servingSize: '100g',
    category: 'Carbohidrați'
  },
  {
    id: 9,
    name: 'Migdale',
    calories: 579,
    protein: 21,
    carbs: 22,
    fats: 50,
    servingSize: '100g',
    category: 'Grăsimi Sănătoase'
  },
  {
    id: 10,
    name: 'Iaurt Grecesc 0%',
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fats: 0.4,
    servingSize: '100g',
    category: 'Proteină'
  },
  {
    id: 11,
    name: 'Shake Proteic Whey',
    calories: 120,
    protein: 24,
    carbs: 3,
    fats: 1.5,
    servingSize: '30g pudră',
    category: 'Suplimente'
  },
  {
    id: 12,
    name: 'Paste Integrale Fierte',
    calories: 124,
    protein: 5,
    carbs: 26,
    fats: 0.5,
    servingSize: '100g',
    category: 'Carbohidrați'
  }
]

export default function CalorieTrackerPage() {
  const [consumedFoods, setConsumedFoods] = useState<ConsumedFood[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFood, setSelectedFood] = useState<Food | null>(null)
  const [quantity, setQuantity] = useState(1)
  
  // Daily goals
  const dailyGoals = {
    calories: 2500,
    protein: 150,
    carbs: 300,
    fats: 70
  }

  // Calculate totals
  const totals = consumedFoods.reduce(
    (acc, food) => ({
      calories: acc.calories + food.calories * food.quantity,
      protein: acc.protein + food.protein * food.quantity,
      carbs: acc.carbs + food.carbs * food.quantity,
      fats: acc.fats + food.fats * food.quantity
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  )

  const filteredFoods = searchQuery
    ? foodDatabase.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : foodDatabase

  const addFood = (food: Food) => {
    const newFood: ConsumedFood = {
      ...food,
      quantity,
      consumedAt: new Date().toLocaleTimeString('ro-RO', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    }
    setConsumedFoods([...consumedFoods, newFood])
    setSelectedFood(null)
    setQuantity(1)
    setSearchQuery('')
  }

  const removeFood = (index: number) => {
    setConsumedFoods(consumedFoods.filter((_, i) => i !== index))
  }

  const getPercentage = (current: number, goal: number) => {
    return Math.min((current / goal) * 100, 100)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-primary py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-3 mb-2">
            <Target className="h-8 w-8 text-primary-foreground" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
              Calorie Tracker
            </h1>
          </div>
          <p className="text-base sm:text-lg text-primary-foreground/80">
            Monitorizează alimentația și macronutrienții tăi zilnici
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6 md:py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Daily Progress */}
            <Card className="p-4 sm:p-6 border-2">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <TrendingUp className="h-5 w-5 text-accent" />
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Progres Zilnic</h2>
              </div>
              
              <div className="grid gap-4 sm:gap-6">
                {/* Calories */}
                <div>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="text-base sm:text-lg font-semibold text-foreground">Calorii</span>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {Math.round(totals.calories)} / {dailyGoals.calories} kcal
                      </p>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-accent">
                      {Math.round(getPercentage(totals.calories, dailyGoals.calories))}%
                    </span>
                  </div>
                  <Progress value={getPercentage(totals.calories, dailyGoals.calories)} className="h-3" />
                </div>

                {/* Macros Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {/* Protein */}
                  <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-semibold text-foreground">Proteine</span>
                      <span className="text-xs sm:text-sm font-bold text-accent">
                        {Math.round(getPercentage(totals.protein, dailyGoals.protein))}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {Math.round(totals.protein)}g / {dailyGoals.protein}g
                    </p>
                    <Progress value={getPercentage(totals.protein, dailyGoals.protein)} className="h-2" />
                  </div>

                  {/* Carbs */}
                  <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-semibold text-foreground">Carbohidrați</span>
                      <span className="text-xs sm:text-sm font-bold text-accent">
                        {Math.round(getPercentage(totals.carbs, dailyGoals.carbs))}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {Math.round(totals.carbs)}g / {dailyGoals.carbs}g
                    </p>
                    <Progress value={getPercentage(totals.carbs, dailyGoals.carbs)} className="h-2" />
                  </div>

                  {/* Fats */}
                  <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-semibold text-foreground">Grăsimi</span>
                      <span className="text-xs sm:text-sm font-bold text-accent">
                        {Math.round(getPercentage(totals.fats, dailyGoals.fats))}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {Math.round(totals.fats)}g / {dailyGoals.fats}g
                    </p>
                    <Progress value={getPercentage(totals.fats, dailyGoals.fats)} className="h-2" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Consumed Foods */}
            <Card className="p-4 sm:p-6 border-2">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Alimente Consumate</h2>
                </div>
                <span className="text-sm text-muted-foreground">
                  {consumedFoods.length} {consumedFoods.length === 1 ? 'aliment' : 'alimente'}
                </span>
              </div>

              {consumedFoods.length === 0 ? (
                <div className="text-center py-8 sm:py-12">
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Nu ai adăugat încă niciun aliment astăzi.
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                    Începe să adaugi din lista de alimente →
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {consumedFoods.map((food, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">
                            {food.name}
                          </h3>
                          <span className="text-xs text-muted-foreground flex-shrink-0">
                            {food.consumedAt}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                          {food.quantity} x {food.servingSize}
                        </p>
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 text-xs">
                          <span className="text-foreground">
                            <strong>{Math.round(food.calories * food.quantity)}</strong> kcal
                          </span>
                          <span className="text-muted-foreground">
                            P: <strong>{Math.round(food.protein * food.quantity)}g</strong>
                          </span>
                          <span className="text-muted-foreground">
                            C: <strong>{Math.round(food.carbs * food.quantity)}g</strong>
                          </span>
                          <span className="text-muted-foreground">
                            G: <strong>{Math.round(food.fats * food.quantity)}g</strong>
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="flex-shrink-0 h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeFood(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>

          {/* Sidebar - Food Database */}
          <div className="lg:col-span-1">
            <Card className="p-4 sm:p-6 border-2 sticky top-20">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Baza de Alimente
              </h2>

              <Input
                type="text"
                placeholder="Caută alimente..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-4"
              />

              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {filteredFoods.map((food) => (
                  <button
                    key={food.id}
                    onClick={() => setSelectedFood(food)}
                    className={`w-full text-left p-3 rounded-lg border transition-all hover:border-accent hover:bg-muted/50 ${
                      selectedFood?.id === food.id ? 'border-accent bg-muted/50' : 'border-border'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-foreground text-sm">
                        {food.name}
                      </h3>
                      <span className="text-xs font-bold text-accent flex-shrink-0">
                        {food.calories} kcal
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {food.servingSize} • {food.category}
                    </p>
                    <div className="flex gap-3 text-[10px] text-muted-foreground">
                      <span>P: {food.protein}g</span>
                      <span>C: {food.carbs}g</span>
                      <span>G: {food.fats}g</span>
                    </div>
                  </button>
                ))}
              </div>

              {selectedFood && (
                <div className="mt-4 p-4 rounded-lg bg-accent/10 border border-accent">
                  <h3 className="font-semibold text-foreground mb-3">
                    Adaugă: {selectedFood.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="text-sm text-muted-foreground">Porții:</label>
                    <Input
                      type="number"
                      min="0.5"
                      step="0.5"
                      value={quantity}
                      onChange={(e) => setQuantity(parseFloat(e.target.value) || 1)}
                      className="w-20"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => addFood(selectedFood)}
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Adaugă
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedFood(null)}
                    >
                      Anulează
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
