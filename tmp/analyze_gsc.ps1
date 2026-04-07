$csvPath = 'c:/Users/sasis/344dev/kaijo-angler/.workspace/.task/query-check/GSC-query-data-20260407 - kaijoangler-0407-after28days.csv'
$data = Import-Csv $csvPath

# Section 1: CTR < 15% (Sorted by Impressions)
$low_ctr = $data | Where-Object { [double]($_.CTR.Replace('%','')) -lt 15 } | Sort-Object { [int]$_.Impressions } -Descending | Select-Object -First 30

# Section 2: Pos > 10 & Imp >= 20
$high_imp_low_rank = $data | Where-Object { [double]$_.Position -gt 10 -and [int]$_.Impressions -ge 20 } | Sort-Object { [int]$_.Impressions } -Descending

# Section 3: Pos <= 15 & CTR < 10%
$underperforming_high_rank = $data | Where-Object { [double]$_.Position -le 15 -and [double]($_.CTR.Replace('%','')) -lt 10 } | Sort-Object { [int]$_.Impressions } -Descending | Select-Object -First 30

# Section 4: Active pages (Clicks > 0)
$active_pages = $data | Where-Object { [int]$_.Clicks -gt 0 } | Select-Object -ExpandProperty Page -Unique

Write-Host "--- SECTION 1: LOW CTR < 15% ---"
$low_ctr | Format-Table Query, Page, Clicks, Impressions, CTR, Position

Write-Host "`n--- SECTION 2: POSITION > 10, IMP >= 20 ---"
$high_imp_low_rank | Format-Table Query, Page, Clicks, Impressions, Position

Write-Host "`n--- SECTION 3: POSITION <= 15, CTR < 10% ---"
$underperforming_high_rank | Format-Table Query, Page, Clicks, Impressions, CTR, Position

Write-Host "`n--- SECTION 4: ACTIVE PAGES ---"
$active_pages
