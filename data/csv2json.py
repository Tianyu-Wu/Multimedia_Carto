import pandas as pd
from glob import glob
import os

files = glob('*csv')

for f in files:
    print(f'processing {os.path.basename(f)}')
    df = pd.read_csv(f)
    df.to_json(f.replace('csv', 'json'), orient='records')

print('done.')