\c icons

CREATE TABLE IF NOT EXISTS currencies (
  id BIGSERIAL PRIMARY KEY,
  symbol TEXT,
  country VARCHAR(255),
  gfxcode TEXT

)
