﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace PigFarm.Models
{
    public partial class Inventory
    {
        public decimal Id { get; set; }
        public string FarmGuid { get; set; }
        public string InventoryNo { get; set; }
        public string InventoryName { get; set; }
        public string InventoryLocation { get; set; }
        public string AccountGuid { get; set; }
        public string Comment { get; set; }
        public string CancelFlag { get; set; }
        public DateTime? CreateDate { get; set; }
        public decimal? CreateBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public decimal? UpdateBy { get; set; }
        public decimal? Status { get; set; }
        public string Guid { get; set; }
    }
}