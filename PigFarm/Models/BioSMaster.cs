﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace PigFarm.Models
{
    public partial class BioSMaster
    {
        public decimal Id { get; set; }
        public string FarmGuid { get; set; }
        public string PigType { get; set; }
        public string Comment { get; set; }
        public DateTime? CreateDate { get; set; }
        public decimal? CreateBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public decimal? UpdateBy { get; set; }
        public DateTime? DeleteDate { get; set; }
        public decimal? DeleteBy { get; set; }
        public decimal? Status { get; set; }
        public string Guid { get; set; }
        public DateTime? RecordDate { get; set; }
        public string RecordTime { get; set; }
        public string MakeOrderGuid { get; set; }
        public string UpperGuid { get; set; }
        public string UpperRecord { get; set; }
    }
}