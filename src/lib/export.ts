export const exportToPDF = (data: { 
    startDate: string
    endDate: string
    revenue: number | null 
  }) => {
    alert(`PDF экспортирован\nПериод: ${data.startDate} - ${data.endDate}\nВыручка: ${data.revenue} ₽`)
  }
  
  export const exportToExcel = (data: { 
    startDate: string
    endDate: string
    revenue: number | null 
  }) => {
    alert(`Excel экспортирован\nПериод: ${data.startDate} - ${data.endDate}\nВыручка: ${data.revenue} ₽`)
  }