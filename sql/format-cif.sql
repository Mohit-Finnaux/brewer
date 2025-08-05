create or replace function format_cif()
returns trigger as $$
begin
 new.cif := 'CIF' || to_char(nextval('cif_seq'), 'FM0000000');
 return new;
end;
$$ language plpgsql;

do $$
begin
 if not exists (
   select 1
   from pg_trigger
   where tgname = 'format_cif_trigger'
 ) then
   create trigger format_cif_trigger
   before insert on "customer"
   for each row
   execute function format_cif();
 end if;
end $$;