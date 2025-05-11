import pandas as pd
from typing import List
import ast

class DatasetTools:
    def __init__(self, csv_path: str):
        self.csv_path = csv_path

    def load_dataset(self) -> pd.DataFrame:
        print("1. Iniciando carga del Dataset con Pandas")
        df = pd.read_csv(self.csv_path, encoding="latin1")
        df = df.where(pd.notnull(df), None)
        print("2. Evaluando datos de tipo json")
        for field in ['reviews', 'menu']:
            if field in df.columns:
                df[field] = df[field].apply(
                    lambda x: ast.literal_eval(x) if isinstance(x, str) and x.strip().startswith("[") else x
                )
        print("3. Dataset cargado con éxito")
        return df

    def get_all_restaurants(self) -> List[dict]:
        df = self.load_dataset()
        df = df.head(25)
        return df.to_dict(orient="records")

    def filter_by_ids(self, ids: List[int]) -> List[dict]:
        print("1. Iniciando filtro de restaurantes recomendados")
        df = self.load_dataset()
        print("2. DataFrame cargado")
        filtered = df[df['id'].isin(ids)]
        print("3. Restaurantes recomendados obtenidos con éxito")
        return filtered.to_dict(orient="records")

    def get_categories_for_recomendations(self):
        categories = ['id','name', 'category', 'stars', 'description', 'price', 'reviews', 'schedule', 'menu', 'address']
        df = self.load_dataset()
        df = df[categories]
        return df