export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      branches: {
        Row: {
          address: string
          id: string
          name: string
        }
        Insert: {
          address: string
          id?: string
          name: string
        }
        Update: {
          address?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          id: string
          name: string
          parent_id: string | null
        }
        Insert: {
          id?: string
          name: string
          parent_id?: string | null
        }
        Update: {
          id?: string
          name?: string
          parent_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_addresses: {
        Row: {
          address: string
          customer_id: string
          id: string
          is_default: boolean
        }
        Insert: {
          address: string
          customer_id: string
          id?: string
          is_default?: boolean
        }
        Update: {
          address?: string
          customer_id?: string
          id?: string
          is_default?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "customer_addresses_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          email: string
          id: string
          name: string
          phone: string | null
        }
        Insert: {
          email: string
          id?: string
          name: string
          phone?: string | null
        }
        Update: {
          email?: string
          id?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      employees: {
        Row: {
          email: string
          id: string
          name: string
          phone: string | null
          role: string
        }
        Insert: {
          email: string
          id?: string
          name: string
          phone?: string | null
          role: string
        }
        Update: {
          email?: string
          id?: string
          name?: string
          phone?: string | null
          role?: string
        }
        Relationships: []
      }
      financials: {
        Row: {
          amount: number | null
          date: string
          id: string
          type: string | null
        }
        Insert: {
          amount?: number | null
          date?: string
          id?: string
          type?: string | null
        }
        Update: {
          amount?: number | null
          date?: string
          id?: string
          type?: string | null
        }
        Relationships: []
      }
      import_details: {
        Row: {
          id: string
          import_id: string
          import_price: number | null
          product_id: string
          quantity: number
          total_cost: number | null
        }
        Insert: {
          id?: string
          import_id: string
          import_price?: number | null
          product_id: string
          quantity: number
          total_cost?: number | null
        }
        Update: {
          id?: string
          import_id?: string
          import_price?: number | null
          product_id?: string
          quantity?: number
          total_cost?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "import_details_import_id_fkey"
            columns: ["import_id"]
            isOneToOne: false
            referencedRelation: "imports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "import_details_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      imports: {
        Row: {
          id: string
          import_date: string
        }
        Insert: {
          id?: string
          import_date?: string
        }
        Update: {
          id?: string
          import_date?: string
        }
        Relationships: []
      }
      order_details: {
        Row: {
          id: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_details_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_details_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          branch_id: string
          customer_id: string
          id: string
          order_date: string
          pickup: boolean
          status: string | null
          total: number
        }
        Insert: {
          branch_id: string
          customer_id: string
          id?: string
          order_date?: string
          pickup?: boolean
          status?: string | null
          total: number
        }
        Update: {
          branch_id?: string
          customer_id?: string
          id?: string
          order_date?: string
          pickup?: boolean
          status?: string | null
          total?: number
        }
        Relationships: [
          {
            foreignKeyName: "orders_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number | null
          id: string
          order_id: string
          payment_date: string
          payment_method: string | null
          payment_status: string | null
        }
        Insert: {
          amount?: number | null
          id?: string
          order_id: string
          payment_date?: string
          payment_method?: string | null
          payment_status?: string | null
        }
        Update: {
          amount?: number | null
          id?: string
          order_id?: string
          payment_date?: string
          payment_method?: string | null
          payment_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          cost_price: number | null
          description: string | null
          id: string
          name: string
          price: number
          stock: number
        }
        Insert: {
          cost_price?: number | null
          description?: string | null
          id?: string
          name: string
          price: number
          stock?: number
        }
        Update: {
          cost_price?: number | null
          description?: string | null
          id?: string
          name?: string
          price?: number
          stock?: number
        }
        Relationships: []
      }
      returns: {
        Row: {
          id: string
          order_id: string
          product_id: string
          reason: string | null
          return_date: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          reason?: string | null
          return_date?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          reason?: string | null
          return_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "returns_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "returns_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      shipments: {
        Row: {
          cod_status: string | null
          id: string
          order_id: string
          shipping_cost: number | null
          shipping_date: string
          status: string | null
        }
        Insert: {
          cod_status?: string | null
          id?: string
          order_id: string
          shipping_cost?: number | null
          shipping_date?: string
          status?: string | null
        }
        Update: {
          cod_status?: string | null
          id?: string
          order_id?: string
          shipping_cost?: number | null
          shipping_date?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_details: {
        Row: {
          id: string
          last_update: string
          product_id: string
          quantity: number
        }
        Insert: {
          id?: string
          last_update?: string
          product_id: string
          quantity: number
        }
        Update: {
          id?: string
          last_update?: string
          product_id?: string
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "stock_details_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_history: {
        Row: {
          change_type: string
          date: string
          id: string
          product_id: string
          quantity: number
        }
        Insert: {
          change_type: string
          date?: string
          id?: string
          product_id: string
          quantity: number
        }
        Update: {
          change_type?: string
          date?: string
          id?: string
          product_id?: string
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "stock_history_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      warranties: {
        Row: {
          end_date: string | null
          id: string
          product_id: string
          start_date: string
        }
        Insert: {
          end_date?: string | null
          id?: string
          product_id: string
          start_date?: string
        }
        Update: {
          end_date?: string | null
          id?: string
          product_id?: string
          start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "warranties_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
