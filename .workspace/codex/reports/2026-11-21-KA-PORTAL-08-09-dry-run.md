# M12 全コマンド dry-run 実行結果

## gsc .workspace/access-data/api/2026-12-19-portal-m12/after/gsc-query

```text
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs gsc --site KA --start 2026-11-21 --end 2026-12-18 --query 海上釣り堀 --dims query --limit 1000000 --slug portal-m12-after-query --out .workspace/access-data/api/2026-12-19-portal-m12/after/gsc-query --dry-run
exit=0
[dry-run] POST https://searchconsole.googleapis.com/webmasters/v3/sites/https%3A%2F%2Fkaijo-fishing.com%2F/searchAnalytics/query
{
  "startDate": "2026-11-21",
  "endDate": "2026-12-18",
  "type": "web",
  "dimensions": [
    "query"
  ],
  "rowLimit": 25000,
  "startRow": 0,
  "dataState": "final",
  "dimensionFilterGroups": [
    {
      "groupType": "and",
      "filters": [
        {
          "dimension": "query",
          "operator": "contains",
          "expression": "海上釣り堀"
        }
      ]
    }
  ]
}
（0行）
```

## gsc .workspace/access-data/api/2026-12-19-portal-m12/after/gsc-query-page

```text
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs gsc --site KA --start 2026-11-21 --end 2026-12-18 --query 海上釣り堀 --dims query,page --limit 1000000 --slug portal-m12-after-query-page --out .workspace/access-data/api/2026-12-19-portal-m12/after/gsc-query-page --dry-run
exit=0
[dry-run] POST https://searchconsole.googleapis.com/webmasters/v3/sites/https%3A%2F%2Fkaijo-fishing.com%2F/searchAnalytics/query
{
  "startDate": "2026-11-21",
  "endDate": "2026-12-18",
  "type": "web",
  "dimensions": [
    "query",
    "page"
  ],
  "rowLimit": 25000,
  "startRow": 0,
  "dataState": "final",
  "dimensionFilterGroups": [
    {
      "groupType": "and",
      "filters": [
        {
          "dimension": "query",
          "operator": "contains",
          "expression": "海上釣り堀"
        }
      ]
    }
  ]
}
（0行）
```

## ga4 .workspace/access-data/api/2026-12-19-portal-m12/after/ga4-facility_search

```text
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-11-21 --end 2026-12-18 --event facility_search --dims customEvent:date_mode,customEvent:show_closed,customEvent:excluded_closed,customEvent:area --metrics eventCount --limit 100000 --slug portal-m12-after-facility_search --out .workspace/access-data/api/2026-12-19-portal-m12/after/ga4-facility_search --dry-run
exit=0
[dry-run] POST https://analyticsdata.googleapis.com/v1beta/properties/497707830:runReport
{
  "dateRanges": [
    {
      "startDate": "2026-11-21",
      "endDate": "2026-12-18"
    }
  ],
  "dimensions": [
    {
      "name": "customEvent:date_mode"
    },
    {
      "name": "customEvent:show_closed"
    },
    {
      "name": "customEvent:excluded_closed"
    },
    {
      "name": "customEvent:area"
    }
  ],
  "metrics": [
    {
      "name": "eventCount"
    }
  ],
  "limit": 100000,
  "offset": 0,
  "dimensionFilter": {
    "filter": {
      "fieldName": "eventName",
      "stringFilter": {
        "matchType": "EXACT",
        "value": "facility_search"
      }
    }
  }
}
（0行）
```

## ga4 .workspace/access-data/api/2026-12-19-portal-m12/after/ga4-facility_search_click

```text
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-11-21 --end 2026-12-18 --event facility_search_click --dims pagePath --metrics eventCount --limit 100000 --slug portal-m12-after-facility_search_click --out .workspace/access-data/api/2026-12-19-portal-m12/after/ga4-facility_search_click --dry-run
exit=0
[dry-run] POST https://analyticsdata.googleapis.com/v1beta/properties/497707830:runReport
{
  "dateRanges": [
    {
      "startDate": "2026-11-21",
      "endDate": "2026-12-18"
    }
  ],
  "dimensions": [
    {
      "name": "pagePath"
    }
  ],
  "metrics": [
    {
      "name": "eventCount"
    }
  ],
  "limit": 100000,
  "offset": 0,
  "dimensionFilter": {
    "filter": {
      "fieldName": "eventName",
      "stringFilter": {
        "matchType": "EXACT",
        "value": "facility_search_click"
      }
    }
  }
}
（0行）
```

## ga4 .workspace/access-data/api/2026-12-19-portal-m12/after/ga4-facility_near_me

```text
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-11-21 --end 2026-12-18 --event facility_near_me --dims eventName --metrics eventCount --limit 100000 --slug portal-m12-after-facility_near_me --out .workspace/access-data/api/2026-12-19-portal-m12/after/ga4-facility_near_me --dry-run
exit=0
[dry-run] POST https://analyticsdata.googleapis.com/v1beta/properties/497707830:runReport
{
  "dateRanges": [
    {
      "startDate": "2026-11-21",
      "endDate": "2026-12-18"
    }
  ],
  "dimensions": [
    {
      "name": "eventName"
    }
  ],
  "metrics": [
    {
      "name": "eventCount"
    }
  ],
  "limit": 100000,
  "offset": 0,
  "dimensionFilter": {
    "filter": {
      "fieldName": "eventName",
      "stringFilter": {
        "matchType": "EXACT",
        "value": "facility_near_me"
      }
    }
  }
}
（0行）
```

## ga4 .workspace/access-data/api/2026-12-19-portal-m12/after/ga4-facility_ranking_search

```text
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-11-21 --end 2026-12-18 --event facility_ranking_search --dims customEvent:area --metrics eventCount --limit 100000 --slug portal-m12-after-facility_ranking_search --out .workspace/access-data/api/2026-12-19-portal-m12/after/ga4-facility_ranking_search --dry-run
exit=0
[dry-run] POST https://analyticsdata.googleapis.com/v1beta/properties/497707830:runReport
{
  "dateRanges": [
    {
      "startDate": "2026-11-21",
      "endDate": "2026-12-18"
    }
  ],
  "dimensions": [
    {
      "name": "customEvent:area"
    }
  ],
  "metrics": [
    {
      "name": "eventCount"
    }
  ],
  "limit": 100000,
  "offset": 0,
  "dimensionFilter": {
    "filter": {
      "fieldName": "eventName",
      "stringFilter": {
        "matchType": "EXACT",
        "value": "facility_ranking_search"
      }
    }
  }
}
（0行）
```

## gsc .workspace/access-data/api/2026-12-19-portal-m12/before/gsc-query

```text
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs gsc --site KA --start 2026-10-24 --end 2026-11-20 --query 海上釣り堀 --dims query --limit 1000000 --slug portal-m12-before-query --out .workspace/access-data/api/2026-12-19-portal-m12/before/gsc-query --dry-run
exit=0
[dry-run] POST https://searchconsole.googleapis.com/webmasters/v3/sites/https%3A%2F%2Fkaijo-fishing.com%2F/searchAnalytics/query
{
  "startDate": "2026-10-24",
  "endDate": "2026-11-20",
  "type": "web",
  "dimensions": [
    "query"
  ],
  "rowLimit": 25000,
  "startRow": 0,
  "dataState": "final",
  "dimensionFilterGroups": [
    {
      "groupType": "and",
      "filters": [
        {
          "dimension": "query",
          "operator": "contains",
          "expression": "海上釣り堀"
        }
      ]
    }
  ]
}
（0行）
```

## gsc .workspace/access-data/api/2026-12-19-portal-m12/before/gsc-query-page

```text
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs gsc --site KA --start 2026-10-24 --end 2026-11-20 --query 海上釣り堀 --dims query,page --limit 1000000 --slug portal-m12-before-query-page --out .workspace/access-data/api/2026-12-19-portal-m12/before/gsc-query-page --dry-run
exit=0
[dry-run] POST https://searchconsole.googleapis.com/webmasters/v3/sites/https%3A%2F%2Fkaijo-fishing.com%2F/searchAnalytics/query
{
  "startDate": "2026-10-24",
  "endDate": "2026-11-20",
  "type": "web",
  "dimensions": [
    "query",
    "page"
  ],
  "rowLimit": 25000,
  "startRow": 0,
  "dataState": "final",
  "dimensionFilterGroups": [
    {
      "groupType": "and",
      "filters": [
        {
          "dimension": "query",
          "operator": "contains",
          "expression": "海上釣り堀"
        }
      ]
    }
  ]
}
（0行）
```

## ga4 .workspace/access-data/api/2026-12-19-portal-m12/before/ga4-facility_search

```text
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-10-24 --end 2026-11-20 --event facility_search --dims customEvent:date_mode,customEvent:show_closed,customEvent:excluded_closed,customEvent:area --metrics eventCount --limit 100000 --slug portal-m12-before-facility_search --out .workspace/access-data/api/2026-12-19-portal-m12/before/ga4-facility_search --dry-run
exit=0
[dry-run] POST https://analyticsdata.googleapis.com/v1beta/properties/497707830:runReport
{
  "dateRanges": [
    {
      "startDate": "2026-10-24",
      "endDate": "2026-11-20"
    }
  ],
  "dimensions": [
    {
      "name": "customEvent:date_mode"
    },
    {
      "name": "customEvent:show_closed"
    },
    {
      "name": "customEvent:excluded_closed"
    },
    {
      "name": "customEvent:area"
    }
  ],
  "metrics": [
    {
      "name": "eventCount"
    }
  ],
  "limit": 100000,
  "offset": 0,
  "dimensionFilter": {
    "filter": {
      "fieldName": "eventName",
      "stringFilter": {
        "matchType": "EXACT",
        "value": "facility_search"
      }
    }
  }
}
（0行）
```

## ga4 .workspace/access-data/api/2026-12-19-portal-m12/before/ga4-facility_search_click

```text
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-10-24 --end 2026-11-20 --event facility_search_click --dims pagePath --metrics eventCount --limit 100000 --slug portal-m12-before-facility_search_click --out .workspace/access-data/api/2026-12-19-portal-m12/before/ga4-facility_search_click --dry-run
exit=0
[dry-run] POST https://analyticsdata.googleapis.com/v1beta/properties/497707830:runReport
{
  "dateRanges": [
    {
      "startDate": "2026-10-24",
      "endDate": "2026-11-20"
    }
  ],
  "dimensions": [
    {
      "name": "pagePath"
    }
  ],
  "metrics": [
    {
      "name": "eventCount"
    }
  ],
  "limit": 100000,
  "offset": 0,
  "dimensionFilter": {
    "filter": {
      "fieldName": "eventName",
      "stringFilter": {
        "matchType": "EXACT",
        "value": "facility_search_click"
      }
    }
  }
}
（0行）
```

## ga4 .workspace/access-data/api/2026-12-19-portal-m12/before/ga4-facility_near_me

```text
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-10-24 --end 2026-11-20 --event facility_near_me --dims eventName --metrics eventCount --limit 100000 --slug portal-m12-before-facility_near_me --out .workspace/access-data/api/2026-12-19-portal-m12/before/ga4-facility_near_me --dry-run
exit=0
[dry-run] POST https://analyticsdata.googleapis.com/v1beta/properties/497707830:runReport
{
  "dateRanges": [
    {
      "startDate": "2026-10-24",
      "endDate": "2026-11-20"
    }
  ],
  "dimensions": [
    {
      "name": "eventName"
    }
  ],
  "metrics": [
    {
      "name": "eventCount"
    }
  ],
  "limit": 100000,
  "offset": 0,
  "dimensionFilter": {
    "filter": {
      "fieldName": "eventName",
      "stringFilter": {
        "matchType": "EXACT",
        "value": "facility_near_me"
      }
    }
  }
}
（0行）
```

## ga4 .workspace/access-data/api/2026-12-19-portal-m12/before/ga4-facility_ranking_search

```text
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-10-24 --end 2026-11-20 --event facility_ranking_search --dims customEvent:area --metrics eventCount --limit 100000 --slug portal-m12-before-facility_ranking_search --out .workspace/access-data/api/2026-12-19-portal-m12/before/ga4-facility_ranking_search --dry-run
exit=0
[dry-run] POST https://analyticsdata.googleapis.com/v1beta/properties/497707830:runReport
{
  "dateRanges": [
    {
      "startDate": "2026-10-24",
      "endDate": "2026-11-20"
    }
  ],
  "dimensions": [
    {
      "name": "customEvent:area"
    }
  ],
  "metrics": [
    {
      "name": "eventCount"
    }
  ],
  "limit": 100000,
  "offset": 0,
  "dimensionFilter": {
    "filter": {
      "fieldName": "eventName",
      "stringFilter": {
        "matchType": "EXACT",
        "value": "facility_ranking_search"
      }
    }
  }
}
（0行）
```

