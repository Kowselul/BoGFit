'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dumbbell, Clock, Flame, Target, CheckCircle2, Circle, ChevronDown, ChevronUp } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Exercise {
  name: string
  sets: number
  reps: string
  rest: string
  notes?: string
}

interface WorkoutDay {
  day: string
  title: string
  duration: number
  calories: number
  difficulty: 'Ușor' | 'Moderat' | 'Avansat'
  focus: string
  exercises: Exercise[]
  completed?: boolean
}

const workoutPlan: WorkoutDay[] = [
  {
    day: 'Luni',
    title: 'Piept & Triceps',
    duration: 60,
    calories: 450,
    difficulty: 'Moderat',
    focus: 'Forță & Masă Musculară',
    exercises: [
      { name: 'Încălzire - Rulare ușoară', sets: 1, reps: '10 min', rest: '-' },
      { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90s', notes: 'Focalizează pe formă corectă' },
      { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', rest: '60s' },
      { name: 'Cable Flyes', sets: 3, reps: '12-15', rest: '45s' },
      { name: 'Triceps Pushdowns', sets: 3, reps: '12-15', rest: '45s' },
      { name: 'Overhead Triceps Extension', sets: 3, reps: '10-12', rest: '60s' },
      { name: 'Diamond Push-ups', sets: 3, reps: 'până la eșec', rest: '45s' },
      { name: 'Stretching', sets: 1, reps: '10 min', rest: '-' }
    ]
  },
  {
    day: 'Marți',
    title: 'Spate & Biceps',
    duration: 65,
    calories: 480,
    difficulty: 'Moderat',
    focus: 'Forță & Definiție',
    exercises: [
      { name: 'Încălzire - Bicicleta ergometrică', sets: 1, reps: '10 min', rest: '-' },
      { name: 'Deadlift', sets: 4, reps: '6-8', rest: '120s', notes: 'Menține spatele drept' },
      { name: 'Pull-ups/Lat Pulldown', sets: 4, reps: '8-10', rest: '60s' },
      { name: 'Bent Over Barbell Row', sets: 3, reps: '10-12', rest: '60s' },
      { name: 'Seated Cable Row', sets: 3, reps: '12-15', rest: '45s' },
      { name: 'Barbell Curls', sets: 3, reps: '10-12', rest: '45s' },
      { name: 'Hammer Curls', sets: 3, reps: '12-15', rest: '45s' },
      { name: 'Concentration Curls', sets: 3, reps: '12-15', rest: '45s' },
      { name: 'Stretching', sets: 1, reps: '10 min', rest: '-' }
    ]
  },
  {
    day: 'Miercuri',
    title: 'Cardio & Core',
    duration: 45,
    calories: 550,
    difficulty: 'Ușor',
    focus: 'Rezistență & Abdomen',
    exercises: [
      { name: 'Încălzire - Mers rapid', sets: 1, reps: '5 min', rest: '-' },
      { name: 'Alergare interval', sets: 8, reps: '1 min sprint / 1 min recuperare', rest: '-', notes: 'Intensitate mare' },
      { name: 'Plank', sets: 3, reps: '60s', rest: '30s' },
      { name: 'Russian Twists', sets: 3, reps: '20', rest: '30s' },
      { name: 'Bicycle Crunches', sets: 3, reps: '20', rest: '30s' },
      { name: 'Leg Raises', sets: 3, reps: '15', rest: '30s' },
      { name: 'Mountain Climbers', sets: 3, reps: '30s', rest: '30s' },
      { name: 'Stretching & Relaxare', sets: 1, reps: '10 min', rest: '-' }
    ]
  },
  {
    day: 'Joi',
    title: 'Umeri & Abdomen',
    duration: 55,
    calories: 420,
    difficulty: 'Moderat',
    focus: 'Forță & Stabilitate',
    exercises: [
      { name: 'Încălzire - Rotații articulare', sets: 1, reps: '5 min', rest: '-' },
      { name: 'Military Press', sets: 4, reps: '8-10', rest: '90s' },
      { name: 'Lateral Raises', sets: 4, reps: '12-15', rest: '45s' },
      { name: 'Front Raises', sets: 3, reps: '12-15', rest: '45s' },
      { name: 'Face Pulls', sets: 3, reps: '15-20', rest: '45s' },
      { name: 'Shrugs', sets: 3, reps: '12-15', rest: '60s' },
      { name: 'Plank variations', sets: 4, reps: '45s', rest: '30s' },
      { name: 'Ab Wheel Rollouts', sets: 3, reps: '10-12', rest: '45s' },
      { name: 'Stretching', sets: 1, reps: '10 min', rest: '-' }
    ]
  },
  {
    day: 'Vineri',
    title: 'Picioare & Fese',
    duration: 70,
    calories: 600,
    difficulty: 'Avansat',
    focus: 'Forță & Putere',
    exercises: [
      { name: 'Încălzire - Alergare ușoară', sets: 1, reps: '10 min', rest: '-' },
      { name: 'Squats', sets: 5, reps: '6-8', rest: '120s', notes: 'Descinde complet' },
      { name: 'Romanian Deadlifts', sets: 4, reps: '8-10', rest: '90s' },
      { name: 'Leg Press', sets: 4, reps: '10-12', rest: '60s' },
      { name: 'Leg Curls', sets: 3, reps: '12-15', rest: '45s' },
      { name: 'Leg Extensions', sets: 3, reps: '12-15', rest: '45s' },
      { name: 'Bulgarian Split Squats', sets: 3, reps: '10-12/picior', rest: '60s' },
      { name: 'Calf Raises', sets: 4, reps: '15-20', rest: '45s' },
      { name: 'Stretching', sets: 1, reps: '15 min', rest: '-' }
    ]
  },
  {
    day: 'Sâmbătă',
    title: 'Full Body & Funcțional',
    duration: 50,
    calories: 500,
    difficulty: 'Moderat',
    focus: 'Forță Funcțională',
    exercises: [
      { name: 'Încălzire dinamică', sets: 1, reps: '10 min', rest: '-' },
      { name: 'Burpees', sets: 4, reps: '10-15', rest: '60s' },
      { name: 'Kettlebell Swings', sets: 4, reps: '15-20', rest: '45s' },
      { name: 'Box Jumps', sets: 3, reps: '10-12', rest: '60s' },
      { name: 'Battle Ropes', sets: 3, reps: '30s', rest: '45s' },
      { name: 'Farmer Walk', sets: 3, reps: '40m', rest: '60s' },
      { name: 'TRX Rows', sets: 3, reps: '12-15', rest: '45s' },
      { name: 'Medicine Ball Slams', sets: 3, reps: '15', rest: '45s' },
      { name: 'Cool Down & Stretching', sets: 1, reps: '10 min', rest: '-' }
    ]
  },
  {
    day: 'Duminică',
    title: 'Odihnă Activă / Yoga',
    duration: 30,
    calories: 150,
    difficulty: 'Ușor',
    focus: 'Recuperare & Flexibilitate',
    exercises: [
      { name: 'Yoga Flow', sets: 1, reps: '20 min', rest: '-', notes: 'Focalizează pe respirație' },
      { name: 'Foam Rolling', sets: 1, reps: '10 min', rest: '-' },
      { name: 'Stretching complet', sets: 1, reps: '15 min', rest: '-' },
      { name: 'Meditație', sets: 1, reps: '10 min', rest: '-' }
    ]
  }
]

export default function PlanAntrenamentPage() {
  const [selectedDay, setSelectedDay] = useState<string>('Luni')
  const [expandedExercises, setExpandedExercises] = useState<{ [key: string]: boolean }>({})
  const [completedExercises, setCompletedExercises] = useState<{ [key: string]: Set<number> }>({})

  const currentWorkout = workoutPlan.find(w => w.day === selectedDay)

  const toggleExercise = (dayIndex: number) => {
    setExpandedExercises(prev => ({
      ...prev,
      [dayIndex]: !prev[dayIndex]
    }))
  }

  const toggleExerciseComplete = (day: string, exerciseIndex: number) => {
    setCompletedExercises(prev => {
      const daySet = new Set(prev[day] || [])
      if (daySet.has(exerciseIndex)) {
        daySet.delete(exerciseIndex)
      } else {
        daySet.add(exerciseIndex)
      }
      return { ...prev, [day]: daySet }
    })
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Ușor': return 'bg-green-500/10 text-green-700 border-green-500/20'
      case 'Moderat': return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20'
      case 'Avansat': return 'bg-red-500/10 text-red-700 border-red-500/20'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-primary py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-3 mb-2">
            <Dumbbell className="h-8 w-8 text-primary-foreground" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
              Plan Antrenament
            </h1>
          </div>
          <p className="text-base sm:text-lg text-primary-foreground/80">
            Program complet de antrenament pentru săptămâna ta
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6 md:py-8">
        {/* Weekly Overview */}
        <Card className="p-4 sm:p-6 border-2 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-accent" />
            Rezumat Săptămână
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">Antrenamente</p>
              <p className="text-xl sm:text-2xl font-bold text-foreground">7 zile</p>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">Timp Total</p>
              <p className="text-xl sm:text-2xl font-bold text-foreground">
                {workoutPlan.reduce((acc, w) => acc + w.duration, 0)} min
              </p>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">Calorii Arse</p>
              <p className="text-xl sm:text-2xl font-bold text-foreground">
                ~{workoutPlan.reduce((acc, w) => acc + w.calories, 0)}
              </p>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">Dificultate</p>
              <p className="text-xl sm:text-2xl font-bold text-accent">Mixtă</p>
            </div>
          </div>
        </Card>

        {/* Day Selector */}
        <div className="mb-6">
          <Tabs value={selectedDay} onValueChange={setSelectedDay} className="w-full">
            <TabsList className="w-full grid grid-cols-4 sm:grid-cols-7 gap-1 sm:gap-2 h-auto p-1 bg-muted">
              {workoutPlan.map((workout) => (
                <TabsTrigger
                  key={workout.day}
                  value={workout.day}
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium"
                >
                  <span className="hidden sm:inline">{workout.day}</span>
                  <span className="sm:hidden">{workout.day.slice(0, 3)}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Workout Details */}
        {currentWorkout && (
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-4 sm:p-6 border-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 sm:mb-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      {currentWorkout.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {currentWorkout.focus}
                    </p>
                  </div>
                  <Badge className={`${getDifficultyColor(currentWorkout.difficulty)} border px-3 py-1 text-xs sm:text-sm font-semibold`}>
                    {currentWorkout.difficulty}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Durată</p>
                      <p className="text-sm sm:text-base font-semibold text-foreground">
                        {currentWorkout.duration} min
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Calorii</p>
                      <p className="text-sm sm:text-base font-semibold text-foreground">
                        ~{currentWorkout.calories} kcal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dumbbell className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Exerciții</p>
                      <p className="text-sm sm:text-base font-semibold text-foreground">
                        {currentWorkout.exercises.length}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Exercises List */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                    Lista Exerciții
                  </h3>
                  {currentWorkout.exercises.map((exercise, idx) => {
                    const isCompleted = completedExercises[currentWorkout.day]?.has(idx)
                    return (
                      <div
                        key={idx}
                        className={`p-3 sm:p-4 rounded-lg border transition-all ${
                          isCompleted 
                            ? 'bg-accent/10 border-accent/50' 
                            : 'bg-muted/30 border-border hover:bg-muted/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => toggleExerciseComplete(currentWorkout.day, idx)}
                            className="flex-shrink-0 mt-0.5"
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="h-5 w-5 text-accent" />
                            ) : (
                              <Circle className="h-5 w-5 text-muted-foreground" />
                            )}
                          </button>
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-semibold text-sm sm:text-base mb-1 ${
                              isCompleted ? 'text-accent line-through' : 'text-foreground'
                            }`}>
                              {idx + 1}. {exercise.name}
                            </h4>
                            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                              <span>
                                <strong>Seturi:</strong> {exercise.sets}
                              </span>
                              <span>
                                <strong>Repetiții:</strong> {exercise.reps}
                              </span>
                              <span>
                                <strong>Pauză:</strong> {exercise.rest}
                              </span>
                            </div>
                            {exercise.notes && (
                              <p className="text-xs sm:text-sm text-accent mt-2 italic">
                                💡 {exercise.notes}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-11 sm:h-12 text-base">
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Marchează Antrenamentul ca Finalizat
                  </Button>
                </div>
              </Card>
            </div>

            {/* Sidebar - Quick Overview */}
            <div className="lg:col-span-1">
              <Card className="p-4 sm:p-6 border-2 sticky top-20">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                  Toate Zilele
                </h3>
                <div className="space-y-3">
                  {workoutPlan.map((workout) => (
                    <button
                      key={workout.day}
                      onClick={() => setSelectedDay(workout.day)}
                      className={`w-full text-left p-3 sm:p-4 rounded-lg border transition-all ${
                        selectedDay === workout.day
                          ? 'border-accent bg-accent/10'
                          : 'border-border hover:border-accent/50 hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-foreground text-sm sm:text-base">
                          {workout.day}
                        </span>
                        <Badge className={`${getDifficultyColor(workout.difficulty)} text-[10px] sm:text-xs px-2 py-0.5`}>
                          {workout.difficulty}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-foreground text-xs sm:text-sm mb-1">
                        {workout.title}
                      </h4>
                      <div className="flex gap-3 text-[10px] sm:text-xs text-muted-foreground">
                        <span>⏱️ {workout.duration}min</span>
                        <span>🔥 {workout.calories}kcal</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 p-3 sm:p-4 rounded-lg bg-accent/10 border border-accent">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2">
                    💡 Sfat Pro
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Asigură-te că încălzești înainte de fiecare antrenament și faci stretching la final pentru a preveni rănirile.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}
