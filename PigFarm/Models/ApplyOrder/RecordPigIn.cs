﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace PigFarm.Models
{
    public partial class RecordPigIn
    {
        public int Id { get; set; }
        public string FarmGuid { get; set; }
        public string Type { get; set; }
        public string MakeOrderGuid { get; set; }
        public string UpperGuid { get; set; }
        public string UpperRecord { get; set; }
        public string Comment { get; set; }
        public DateTime? CreateDate { get; set; }
        public decimal? CreateBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public decimal? UpdateBy { get; set; }
        public DateTime? DeleteDate { get; set; }
        public decimal? DeleteBy { get; set; }
        public decimal? Status { get; set; }
        public string Guid { get; set; }
        public DateTime? EstDate { get; set; }
        public DateTime? ApplyDate { get; set; }
        public string ApplyReason { get; set; }
        public string ApplyGuid { get; set; }
        public DateTime? RejectDate { get; set; }
        public string RejectReason { get; set; }
        public string RejectGuid { get; set; }
        public DateTime? VeterinaryDate { get; set; }
        public string VeterinaryReason { get; set; }
        public string VeterinaryGuid { get; set; }
        public DateTime? ExecuteDate { get; set; }
        public string ExecuteReason { get; set; }
        public string ExecuteGuid { get; set; }
        public DateTime? AgreeDate { get; set; }
        public string AgreeReason { get; set; }
        public string AgreeGuid { get; set; }
        public string InOutNo { get; set; }
        public string InOutName { get; set; }
        public string FromFarm { get; set; }
        public string ToFarm { get; set; }
        public string PigInfor { get; set; }
        public string InOutReason { get; set; }
        public string InOutSource { get; set; }
        public string InOutDept { get; set; }
        public decimal? InOutAmount { get; set; }
        public decimal? InOutWeight { get; set; }

        public string SourceOrderNo { get; set; }
        public decimal? SourceAmount { get; set; }
        public decimal? SourceTotalWeight { get; set; }
        public decimal? RealAmount { get; set; }
        public decimal? RealTotalWeight { get; set; }

    }
}