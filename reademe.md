Implement this as Javascript


```
ALTER TABLE api_orgunit ADD COLUMN coords geometry default null


delimiter //
CREATE TRIGGER insert_coords BEFORE INSERT ON api_orgunit
FOR EACH ROW
BEGIN
	 IF NOT ISNULL(NEW.coordinates) THEN
			SET NEW.coords = ST_AsText(ST_GeomFromGeoJSON(NEW.coordinates));
	 END IF;
END;//
delimiter ;
```

``` 
CREATE OR REPLACE FUNCTION points_dist(centro text, localizacao text)
  RETURNS FLOAT AS $BODY$
				DECLARE
					r float;
					centroLat float;
					centroLng float;
					localizacaoLat float;
					localizacaoLng float;
					rlat1 float;
					rlat2 float;
					difflat float;
					difflon float;
					d float;
					
        BEGIN
					r := 6371.0710;
					centroLat := (regexp_split_to_array(substring(centro from position('(' in centro) + 1 for length(centro) - 7), E'\\s+'))[2]::numeric; 
					centroLng := (regexp_split_to_array(substring(centro from position('(' in centro) + 1 for length(centro) - 7), E'\\s+'))[1]::numeric;
					
					localizacaoLat := (regexp_split_to_array(substring(localizacao from position('(' in localizacao) + 1 for length(localizacao) - 7), E'\\s+'))[2]::numeric; 
					localizacaoLng := (regexp_split_to_array(substring(localizacao from position('(' in localizacao) + 1 for length(localizacao) - 7), E'\\s+'))[1]::numeric; 
					
					rlat1 := centroLat * pi() / 180; 
					rlat2 := localizacaoLat * pi() / 180;
					difflat := rlat2 - rlat1;
					difflon := (localizacaoLng - centroLng) * pi() / 180;
					d := 2 * r * asin(|/(sin(difflat / 2) * sin(difflat / 2) + cos(rlat1) * cos(rlat2) * sin(difflon / 2) * sin(difflon / 2)));
					
          RETURN d;
        END;
$BODY$
  LANGUAGE plpgsql 
```