import pandas as pd
from sqlalchemy import create_engine

DATABASE_URL = "mysql+pymysql://root:root123@localhost/business_dashboard"

engine = create_engine(DATABASE_URL)

df = pd.read_csv("data/business_data.csv")

df.to_sql(
    name="listing_master",
    con=engine,
    if_exists="append",
    index=False
)

print("Data Inserted Successfully")
