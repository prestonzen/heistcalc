import { acts, SRC_LABEL } from "../../data/money";
import { banks } from "../../data/banks";
import { garages, freeGarages } from "../../data/garages";

// Open dataset behind the GTA 6 money planner. Every number carries a confidence label.
export function GET() {
  const body = {
    name: "HeistCalc GTA 6 money dataset",
    page: "https://heistcalc.com/gta-6/make-money/",
    updated: "2026-11-25",
    confidence: SRC_LABEL,
    methods: acts.map(({ id, name, ch, lo, hi, src, pays, how, range, time, pay, min }) => ({
      id, name, opens_chapter: ch, per_run_low: lo, per_run_high: hi, default_payout: pay, default_minutes: min, confidence: src, pays_in: pays, how, reported: range, time,
    })),
    banks: banks.map(({ n, name, area, county, size, lo, hi, seen, ours }) => ({
      n, name: area ? `${name} – ${area}` : name, county, size, take_low: lo, take_high: hi,
      confidence: seen ? "stream" : "1", source: "PowerPyx bank list" + (seen ? "; same range on the in-game map card on our stream" : ""), our_take: ours ?? null,
    })),
    garages: garages.map(({ id, name, area, county, price, base, spaces, unlock }) => ({
      id, name, area, county, price, price_without_buckme_gold: base, spaces, opens: unlock, confidence: "2+",
      source: "GTABase, LootMapped and RetroBroker list the same price; RetroBroker says it includes BuckMe Gold's 20% off and gives the full price",
    })),
    free_garages: freeGarages.map(({ name, area, spaces, how, src }) => ({ name, area, spaces, how, confidence: src })),
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { "Content-Type": "application/json; charset=utf-8" } });
}
