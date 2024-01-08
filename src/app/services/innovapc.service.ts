import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://wlhlxjstuprxqqwxqfdg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsaGx4anN0dXByeHFxd3hxZmRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzNzY5NDAsImV4cCI6MjAxODk1Mjk0MH0.y1hrh2NgtYVaIvLhJYJLuD7JyPgNCx0pfn365Iu-DnA'

@Injectable({
  providedIn: 'root'
})

export class InnovaPCService {

  private client: SupabaseClient;
  constructor(){
    this.client = createClient(supabaseUrl,supabaseKey);
  }
  async getProdCategories() : Promise<{ type: string; value: any; }>{
    let {data:categorias, error} = await this.client.from('producto_categoria').select('*')
    if (error) {
      return {
        type: 'error',
        value: error.message
      }
    }

    return {type: 'success' , value: categorias}
  }
}
