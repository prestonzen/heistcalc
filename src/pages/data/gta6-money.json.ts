import { acts, SRC_LABEL } from "../../data/money";
import { banks } from "../../data/banks";

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
  };
  return new Response(JSON.stringify(body, null, 2), { headers: { "Content-Type": "application/json; charset=utf-8" } });
}
